import { notifyUnauthorized } from "../auth/authEvents";
import { getStoredToken } from "../auth/authStorage";
 
const API_URL = import.meta.env.VITE_API_URL ?? "";
 

export async function apiFetch(path, options = {}) {
  const token = getStoredToken();
  const headers = new Headers(options.headers);
 
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
 
  if (options.body && !(options.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
 
  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
 
  if (response.status === 401 && token) {
    notifyUnauthorized();
  }
 
  return response;
}
 