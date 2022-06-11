import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { setAuth } from "../redux/slices/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
