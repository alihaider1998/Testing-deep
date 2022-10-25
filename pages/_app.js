import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'
import favicon from "../public/favicon.ico";


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
            <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
                <title>DeepSynthBody</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
