import axios from "axios";
import config from "../../../../common/config";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { code, grantType } = req.body;
    const clientSecretBasic = Buffer.from(
      `${config.OAUTH_CLIENT_ID}:${config.OAUTH_CLIENT_SECRET}`
    ).toString("base64");
    const headers = {
      authorization: `Basic ${clientSecretBasic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const params = new URLSearchParams();
    params.set("grant_type", grantType);
    if (grantType === "authorization_code") {
      params.set("code", code);
      params.set("redirect_uri", config.OAUTH_REDIRECT_URL);
    } else {
      params.set("token", req.body.refreshToken);
    }

    // TODO: handle error
    const response = await axios.post(config.OAUTH_TOKEN_ENDPOINT, params, {
      headers,
    });

    res.status(response.status).json({ ...response.data });
  } else {
    res.status(404);
  }
}
