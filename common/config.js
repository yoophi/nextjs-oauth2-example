const OAUTH_TOKEN_ENDPOINT =
  (process.browser
    ? window.OAUTH_TOKEN_ENDPOINT
    : process.env.OAUTH_TOKEN_ENDPOINT) || "http://auth.example.com";
const OAUTH_CLIENT_ID =
  (process.browser ? window.OAUTH_CLIENT_ID : process.env.OAUTH_CLIENT_ID) || "undefined";
const OAUTH_CLIENT_SECRET = process.browser ? "" : process.env.OAUTH_CLIENT_SECRET;

const config = {
  OAUTH_TOKEN_ENDPOINT,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
};

export default config;
