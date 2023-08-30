const { Client } = require('@notionhq/client');

export default async function handler(req, res) {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
  });
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  res.status(200).json(response.results);
}
