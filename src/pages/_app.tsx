import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gerar Ponto</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A simple project to generate schedules" />
      </Head>
      <NextSeo
        title="Gerar ponto - Sua folha de ponto mensal"
        description="Gere sua folha de ponto mensal com horários aleatórios dentro das suas especificações."
        canonical="https://reactavancado.com.br/"
        openGraph={{
          url: 'https://reactavancado.com.br/',
          title: 'Gerar ponto - Sua folha de ponto mensal',
          description: 'Gere sua folha de ponto mensal com horários aleatórios dentro das suas especificações.',
          site_name: 'Gerar ponto',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@igortullio',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
