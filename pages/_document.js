// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Favicon untuk tab */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* Title fallback (jika tidak ditentukan di halaman) */}
        <title>Mood Playlist Finder 🎧</title>
        <meta name="description" content="Pilih mood kamu dan nikmati playlist terbaik!" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
