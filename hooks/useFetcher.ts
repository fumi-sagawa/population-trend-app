//useSWRのふぇっちゃ
//API Routes用のフェッチャ
export async function fetcher(url: string): Promise<boolean | null> {
  const response = await fetch(url);
  return response.json();
}
