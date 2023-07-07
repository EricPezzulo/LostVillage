import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Layout from "~/Layouts/Layout";
import { Provider } from "react-redux";
import { store } from "~/redux/store";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>{" "}
      </Provider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
