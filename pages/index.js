import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Workshop from '@components/Workshop';
require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ databaseContents }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {databaseContents.results.map((workshop, index) => (
          <Workshop key={index} workshop={workshop} />
        ))}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const databaseContents = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: {
      databaseContents,
    },
  };
}

setTimeout(function () {
  window.location.reload();
}, 5000);
