import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  // const url = 'https://jsonplaceholder.typicode.com/users';
  // const url = process.env.URL;
  // const response = await fetch(url);
  const response = await fetch(process.env.REASAS_URL_PREFECTURES, {
    headers: { 'X-API-KEY': process.env.X_API_KEY },
  });
  const data = await response.json();
  await res.status(200).json(data.result);
};

export default handler;
