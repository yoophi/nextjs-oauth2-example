const BASE_URL =
  (process.browser ? window.BASE_URL : process.env.BASE_URL) || "";
const OAUTH_REDIRECT_URL =
  (process.browser
    ? window.OAUTH_REDIRECT_URL
    : process.env.OAUTH_REDIRECT_URL) || `${BASE_URL}/oauth/callback`;
const OAUTH_AUTHORIZATION_ENDPOINT =
  (process.browser
    ? window.OAUTH_AUTHORIZATION_ENDPOINT
    : process.env.OAUTH_AUTHORIZATION_ENDPOINT) || "http://auth.example.com";
const OAUTH_CLIENT_ID =
  (process.browser ? window.OAUTH_CLIENT_ID : process.env.OAUTH_CLIENT_ID) ||
  "undefined";
const OAUTH_CLIENT_SECRET = process.browser
  ? ""
  : process.env.OAUTH_CLIENT_SECRET;
const OAUTH_SCOPE =
  (process.browser ? window.OAUTH_SCOPE : process.env.OAUTH_SCOPE) ||
  "undefined";
const config = {
  BASE_URL,
  OAUTH_REDIRECT_URL,
  OAUTH_AUTHORIZATION_ENDPOINT,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_SCOPE,
};

export default config;
