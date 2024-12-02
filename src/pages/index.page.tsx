import type { NextPage } from 'next';
import Head from 'next/head';
import React, { memo } from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>lobechat</title>
      </Head>
      lobechat
    </>
  );
};

export default memo(Home);
