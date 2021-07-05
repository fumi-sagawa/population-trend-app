import { NextApiHandler } from 'next';
import fetch from 'node-fetch';

const handler: NextApiHandler = async (req, res) => {
  console.log('population api called');
  const url = `${process.env.REASAS_URL_POPULATION}${req.query.id}`;
  const response = await fetch(url, {
    headers: { 'X-API-KEY': process.env.X_API_KEY },
  });
  const data = await response.json();
  //REASAS_apiの人口構成から総人口推移を抜粋
  const populationTrend = await data.result.data[0].data.map(
    (prefectureData) => {
      return prefectureData.value;
    },
  );
  res.status(200).json(populationTrend);
};

export default handler;
