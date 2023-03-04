import { RecoilRoot } from "recoil";
import "../lib/firebase";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
