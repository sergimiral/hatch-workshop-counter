import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Workshop from '@components/Workshop';
require('dotenv').config();
const { Client } = require('@notionhq/client');

import { useEffect, useState } from 'react';

export default function Home() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const notion = new Client({
        auth: process.env.NEXT_PUBLIC_NOTION_KEY,
      });
      const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
      const response = await notion.databases.query({
        database_id: databaseId,
      });
      setWorkshops(response.results);
    };

    fetchWorkshops();
    const intervalId = setInterval(fetchWorkshops, 5000); // fetch every 5 seconds

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

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
