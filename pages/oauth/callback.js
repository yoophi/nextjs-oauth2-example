import { useRouter } from "next/router";

export default function Home({ query }) {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div className="container">
      <h3>query</h3>
      <pre>{JSON.stringify({ code }, null, 2)}</pre>
    </div>
  );
}
