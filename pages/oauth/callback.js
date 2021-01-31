import { useCallback, useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";

export default function Home({ query }) {
  const router = useRouter();
  const { code } = router.query;

  const [data, setData] = useState([]);
  const handleCallback = useCallback((code) => {
    // TODO: fix
    if (code) {
      axios
        .post("/api/oauth/token", {
          grantType: "authorization_code",
          code: code,
        })
        .then((res) => {
          setData(res.data);
        });
    }
  }, []);
  useEffect(() => {
    handleCallback(code);
  }, [code]);

  return (
    <div className="container">
      <h3>query</h3>
      <pre>{JSON.stringify({ code }, null, 2)}</pre>
      <h3>data</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
