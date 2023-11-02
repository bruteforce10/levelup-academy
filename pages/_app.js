import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "./layout";
import { AppContextProvider } from "@/lib/context/AppContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </SessionProvider>
  );
}
