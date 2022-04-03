import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.scss';
import Layout from '../components/layout';
import Router from 'next/router';
import withYM from 'next-ym';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withYM('88134506', Router)(MyApp);
