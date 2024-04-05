import { Html, Head, Main, NextScript } from "next/document";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={montserrat.className}>
      </body>
    </Html>
  );
}
