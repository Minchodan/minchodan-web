import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import wrapper from "../store/configureStore";
import Layout from "../components/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(MyApp);
