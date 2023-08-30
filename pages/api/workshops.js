const { Client } = require('@notionhq/client');

export default async function handler(req, res) {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
  });
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    // Ensure that response.results is an array before returning it
    if (Array.isArray(response.results)) {
      const filteredResults = response.results.filter(workshop => workshop.properties.Name && workshop.properties.Name.title.length > 0);
      res.status(200).json(filteredResults);
    } else {
      console.error('Notion API returned unexpected data:', response.results);
      res.status(200).json([]); // Return an empty array
    }
  } catch (error) {
    console.error('Failed to query Notion API:', error);
    res.status(200).json([]); // Return an empty array
  }
}
