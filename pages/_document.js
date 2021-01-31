import Document, { Head, Main, NextScript } from "next/document";

import React from "react";
import packageJson from "../package.json";

export default class DefaultDocument extends Document {
  render() {
    const script = {
      setOAuthClientId: "window.OAUTH_CLIENT_ID = undefined;",
      setOAuthTokenEndpoint: "window.OAUTH_TOKEN_ENDPOINT = undefined;",
      setVersion: `window.VERSION = '${packageJson.version}';`,
    };

    if (process.env.OAUTH_CLIENT_ID) {
      script.setOAuthClientId = `window.OAUTH_CLIENT_ID = '${process.env.OAUTH_CLIENT_ID}';`;
    }

    if (process.env.OAUTH_TOKEN_ENDPOINT) {
      script.setOAuthTokenEndpoint = `window.OAUTH_TOKEN_ENDPOINT = '${process.env.OAUTH_TOKEN_ENDPOINT}';`;
    }

    return (
      <html lang={this.props.__NEXT_DATA__.props.lang || "en"}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html:  script.setOAuthClientId + script.setOAuthTokenEndpoint + script.setVersion ,
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
