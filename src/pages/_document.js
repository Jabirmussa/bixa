import { Html, Head, Main, NextScript } from "next/document";
import Home from ".";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Home />
      </body>
    </Html>
  );
}
