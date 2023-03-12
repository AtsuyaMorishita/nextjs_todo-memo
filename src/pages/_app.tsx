import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "ress";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />;
    </>
  );
}
