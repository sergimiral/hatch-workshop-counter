import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Workshop from '@components/Workshop';
require('dotenv').config();
const { Client } = require('@notionhq/client');

export default function Home({ workshops }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {workshops.map((workshop, index) => (
          <Workshop key={index} workshop={workshop} />
        ))}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
  });
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
  const workshops = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: {
      workshops: workshops.results,
    },
  };
}

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {workshops.map((workshop, index) => (
          <Workshop key={index} workshop={workshop} />
        ))}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
