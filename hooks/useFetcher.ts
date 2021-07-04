//useSWRのふぇっちゃ
//API Routes/prefecture用のフェッチャ
export async function fetcher(url: string): Promise<boolean | null> {
  const response = await fetch(url);
  return response.json();
}

// API Routes/population/用のフェッチャ
// export async function fetcher2(url: string, someObject): Promise<boolean | null> {
//   const response = await fetch(url);
//   return response.json();
// }
