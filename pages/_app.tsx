/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/third-party.css";
import "../styles/style.css";
import { AppProps } from "next/app";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
