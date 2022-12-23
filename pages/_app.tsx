import ProgressBar from "components/ProgressBar";
import SnackbarProvider from "components/Snackbar";
import type { AppProps } from "next/app";
import ThemeProvider from "theme";
import ThemeColorPresets from "theme/ThemeColorPresets";
import "../styles/globals.css";
import { NextPageWithLayout } from "./page";

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <ThemeProvider>
            <ThemeColorPresets>
                <SnackbarProvider>
                    <ProgressBar />
                    {getLayout(<Component {...pageProps} />)}
                </SnackbarProvider>
            </ThemeColorPresets>
        </ThemeProvider>
    );
}

export default MyApp;
