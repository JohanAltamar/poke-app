import type { NextPage } from "next";

import { Layout } from "@/components/layouts";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-5xl">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  );
};

export default Home;
