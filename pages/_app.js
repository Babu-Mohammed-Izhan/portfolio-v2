import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.scss';
import Router from 'next/router';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import * as ga from '../lib/analytics';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} key={route} />
    </Layout>
  );
}

export default MyApp;
