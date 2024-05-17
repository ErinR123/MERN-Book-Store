import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {

  console.log(`Sending ${method} request at url ${url}`)
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  console.log(`User's session token is: ${token}`)
  if (token) {
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error("Bad Request");
};