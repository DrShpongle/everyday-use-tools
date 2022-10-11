import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Head>
        <title>Generators</title>
      </Head>
      <Link href="/triangle-generator">
        <a>triangle generator</a>
      </Link>
    </>
  )
}

export default Home
