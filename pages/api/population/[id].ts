import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  console.log('population api called');
  console.log(req.query.id);
  const url = `${process.env.REASAS_URL_POPULATION}${req.query.id}`;
  console.log(url);
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
  await res.status(200).json(populationTrend);
};

export default handler;
