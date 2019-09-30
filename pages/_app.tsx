import React from 'react';
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head';
import ResetCSS from '../libs/components/ResetCSS';

const theme = {}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <ResetCSS />
          <style>{`
            body {
              font-family: "Source Sans Pro", sans-serif;
            }
          `}</style>
          <link rel="preload" href="https://i.pravatar.cc/300?u=1" as="image" />
          <link rel="preload" href="https://icon-library.net/images/smile-icon/smile-icon-6.jpg" as="image" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
