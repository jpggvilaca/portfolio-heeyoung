import Head from "next/head";

import Layout from "../components/layout";

import "../styles/globals.css";

export default function MainApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Heeyoung Sohn</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
