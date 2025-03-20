import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import { store, persistor} from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading ={"loading"} persistor={persistor}>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      </PersistGate>
    </Provider>
  );
}
