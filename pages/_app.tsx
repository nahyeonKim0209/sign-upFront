import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Container>
        <style global jsx>
          {`
            html,
            body,
            #__next {
              height: 100%;
              width: 100%;
              margin: 0px;
              padding: 0px;
            }
          `}
        </style>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
          />
          <meta name="description" content="어서와요 키퍼의 숲" />
          <meta name="keywords" content="nextjs,static,website" />
          <title>i-Keeper</title>
        </Head>

        <Component {...pageProps} />
      </Container>
    </RecoilRoot>
  );
}
