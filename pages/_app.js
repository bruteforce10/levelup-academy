import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "./layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />;
      </SessionProvider>
    </Layout>
  );
}
