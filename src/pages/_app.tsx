import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      enableColorScheme={false}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default appWithTranslation(MyApp);
