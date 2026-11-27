
const MS_PER_SECOND = 1000;
 
export function decodeTokenPayload(token) {
  if (typeof token !== "string") return null;
 
  const parts = token.split(".");
  if (parts.length !== 3) return null;
 
  try {
    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    const bytes = Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
}
 

export function getTokenExpiration(token) {
  const payload = decodeTokenPayload(token);
  if (!payload || typeof payload.exp !== "number") return null;
  return payload.exp * MS_PER_SECOND;
}
 
export function isTokenValid(token, now = Date.now()) {
  const expiresAt = getTokenExpiration(token);
  return expiresAt !== null && expiresAt > now;
}
 

export function isTokenExpired(token, now = Date.now()) {
  const expiresAt = getTokenExpiration(token);
  return expiresAt !== null && expiresAt <= now;
}
 