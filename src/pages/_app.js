import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import wrapper from "../store/configureStore";
import Layout from "../components/Layout";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(MyApp);
