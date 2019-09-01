import React from 'react'
// import Link from 'next/link'
import { NextPage } from 'next';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const IndexPage: NextPage = () => {
  const Router = useRouter();
  console.log(Router);
  return (
    <Layout>

      <h1>Index</h1>

    </Layout>

  )
}

export default IndexPage;