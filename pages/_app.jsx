import GlobalStyles from "../components/GlobalStyles";
import Head from "next/head";

export default ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Collect anonymous feedback</title>
            </Head>
            <GlobalStyles>
                <Component {...pageProps} />
            </GlobalStyles>
        </>
    );
};