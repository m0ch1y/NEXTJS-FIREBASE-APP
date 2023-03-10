import { RecoilRoot } from "recoil";
import "../lib/firebase";
import "../styles/globals.scss";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { AppProps } from "next/app";

dayjs.locale("ja");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
