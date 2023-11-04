import Layout from "@/components/layout/layout";
import "@/public/static/fonts/fonts.css";
import { GlobalStyles } from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />;
            </Layout>
        </>
    );
}
