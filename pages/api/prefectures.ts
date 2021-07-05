import { NextApiHandler } from 'next';
import fetch from 'node-fetch';

const handler: NextApiHandler = async (req, res) => {
  console.log('prefecture api called');
  const response = await fetch(process.env.REASAS_URL_PREFECTURES, {
    headers: { 'X-API-KEY': process.env.X_API_KEY },
  });
  const data = await response.json();
  res.status(200).json(data.result);
};

export default handler;
