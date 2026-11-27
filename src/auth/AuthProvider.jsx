import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext, SESSION_STATUS } from "./AuthContext";
import { AUTH_UNAUTHORIZED_EVENT } from "./authEvents";
import { AUTH_STORAGE_KEY, clearSession, loadSession, saveSession } from "./authStorage";
import { getTokenExpiration, isTokenExpired, isTokenValid } from "./token";
 
const MAX_TIMEOUT_MS = 2_147_483_647;
 
function getInitialAuthState() {
  const session = loadSession();
 
  if (session && isTokenValid(session.token)) {
    return { session, status: SESSION_STATUS.AUTHENTICATED };
  }
 
  if (session) {
    clearSession();
    const status = isTokenExpired(session.token)
      ? SESSION_STATUS.EXPIRED
      : SESSION_STATUS.UNAUTHENTICATED;
    return { session: null, status };
  }
 
  return { session: null, status: SESSION_STATUS.UNAUTHENTICATED };
}
 
function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(getInitialAuthState);
  const { session, status } = authState;
 
  const endSession = useCallback((reason) => {
    clearSession();
    setAuthState({ session: null, status: reason });
  }, []);
 
  const login = useCallback(({ token, user = null }) => {
    if (!isTokenValid(token)) {
      throw new Error("El token recibido no es válido o ya expiró.");
    }
 
    const newSession = { token, user };
    saveSession(newSession);
    setAuthState({ session: newSession, status: SESSION_STATUS.AUTHENTICATED });
  }, []);
 
  const logout = useCallback(() => {
    endSession(SESSION_STATUS.UNAUTHENTICATED);
  }, [endSession]);
 
  useEffect(() => {
    if (!session) return undefined;
 
    const expiresAt = getTokenExpiration(session.token);
    const delay = Math.min(Math.max(expiresAt - Date.now(), 0), MAX_TIMEOUT_MS);
 
    const timerId = setTimeout(() => {
      if (!isTokenValid(session.token)) {
        endSession(SESSION_STATUS.EXPIRED);
      }
    }, delay);
 
    return () => clearTimeout(timerId);
  }, [session, endSession]);
 
  useEffect(() => {
    if (!session) return undefined;
 
    const revalidate = () => {
      if (document.visibilityState === "visible" && !isTokenValid(session.token)) {
        endSession(SESSION_STATUS.EXPIRED);
      }
    };
 
    document.addEventListener("visibilitychange", revalidate);
    window.addEventListener("focus", revalidate);
 
    return () => {
      document.removeEventListener("visibilitychange", revalidate);
      window.removeEventListener("focus", revalidate);
    };
  }, [session, endSession]);
 
  useEffect(() => {
    const handleUnauthorized = () => endSession(SESSION_STATUS.EXPIRED);
 
    window.addEventListener(AUTH_UNAUTHORIZED_EVENT, handleUnauthorized);
    return () => window.removeEventListener(AUTH_UNAUTHORIZED_EVENT, handleUnauthorized);
  }, [endSession]);
 
  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key !== AUTH_STORAGE_KEY && event.key !== null) return;
 
      const stored = loadSession();
      if (stored && isTokenValid(stored.token)) {
        setAuthState({ session: stored, status: SESSION_STATUS.AUTHENTICATED });
      } else {
        setAuthState({ session: null, status: SESSION_STATUS.UNAUTHENTICATED });
      }
    };
 
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
 
  const value = useMemo(
    () => ({
      user: session?.user ?? null,
      token: session?.token ?? null,
      status,
      isAuthenticated: status === SESSION_STATUS.AUTHENTICATED,
      isSessionExpired: status === SESSION_STATUS.EXPIRED,
      login,
      logout,
    }),
    [session, status, login, logout]
  );
 
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
 
export default AuthProvider;
 