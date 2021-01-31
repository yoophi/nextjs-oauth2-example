import Document, { Head, Main, NextScript } from "next/document";

import React from "react";
import packageJson from "../package.json";

export default class DefaultDocument extends Document {
  render() {
    const script = {
      setBaseUrl: "window.BASE_URL = undefined;",
      setOAuthClientId: "window.OAUTH_CLIENT_ID = undefined;",
      setOAuthRedirectUrl: "window.OAUTH_REDIRECT_URL = undefined;",
      setOAuthTokenEndpoint: "window.OAUTH_TOKEN_ENDPOINT = undefined;",
      setVersion: `window.VERSION = '${packageJson.version}';`,
    };

    if (process.env.BASE_URL) {
      script.setBaseUrl = `window.BASE_URL = '${process.env.BASE_URL}';`;
    }

    if (process.env.OAUTH_CLIENT_ID) {
      script.setOAuthClientId = `window.OAUTH_CLIENT_ID = '${process.env.OAUTH_CLIENT_ID}';`;
    }

    if (process.env.OAUTH_REDIRECT_URL) {
      script.setOAuthRedirectUrl = `window.OAUTH_REDIRECT_URL = '${process.env.OAUTH_REDIRECT_URL}';`;
    }

    if (process.env.OAUTH_TOKEN_ENDPOINT) {
      script.setOAuthTokenEndpoint = `window.OAUTH_TOKEN_ENDPOINT = '${process.env.OAUTH_TOKEN_ENDPOINT}';`;
    }

    return (
      <html lang={this.props.__NEXT_DATA__.props.lang || "en"}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html:
                script.setBaseUrl +
                script.setOAuthClientId +
                script.setOAuthRedirectUrl +
                script.setOAuthTokenEndpoint +
                script.setVersion,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
