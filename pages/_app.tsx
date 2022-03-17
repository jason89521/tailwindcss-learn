import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="This project was built to get familiar with Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
