import React from 'react';
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head';
import ResetCSS from '../components/ResetCSS';

const theme = {}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <ResetCSS />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
