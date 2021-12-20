import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from 'src/styles/theme';
import createEmotionCache from 'src/utils/createEmotionCache';
import Layout from 'src/components/Layout';
import { AnimatePresence } from 'framer-motion';


const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;  

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Rick and Morty</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <Component {...pageProps} key={`${router.asPath}`} />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    </CacheProvider>
  );
}