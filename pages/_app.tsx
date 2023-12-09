import Layout from "@/components/layout/layout";
import "@/public/static/fonts/fonts.css";
import { GlobalStyles } from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Provider store={store}>
                <GlobalStyles />
                <Layout>
                    <Component {...pageProps} />;
                </Layout>
            </Provider>
        </>
    );
}

export default App;
