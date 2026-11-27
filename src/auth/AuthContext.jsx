import { createContext } from "react";
 
export const SESSION_STATUS = Object.freeze({
  AUTHENTICATED: "authenticated",
  UNAUTHENTICATED: "unauthenticated",
  EXPIRED: "expired",
});
 
export const AuthContext = createContext(null);
 