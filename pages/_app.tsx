import type { AppProps } from "next/app";
import ThemeProvider from "theme";
import "../styles/globals.css";
import { NextPageWithLayout } from "./page";

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    );
}

export default MyApp;
