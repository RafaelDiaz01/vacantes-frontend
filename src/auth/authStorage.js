export const AUTH_STORAGE_KEY = "vacantes.auth";
 
export function loadSession() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
 
    const session = JSON.parse(raw);
    return session && typeof session.token === "string" ? session : null;
  } catch {
    return null;
  }
}

export function saveSession(session) {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  } catch {
      // Si no se puede guardar, la sesión sigue activa en memoria hasta recargar.
  }
}
 
export function clearSession() {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch {
    // Nada que limpiar si el almacenamiento no está disponible.  
  }
}
 
export function getStoredToken() {
  return loadSession()?.token ?? null;
}
 