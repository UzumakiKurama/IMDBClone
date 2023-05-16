import MainContainer from '@/components/Main/MainContainer';
const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };
  const results = await fetch(`https://api.themoviedb.org/3/movie/${genre === "fetchTopRated" ? 'top_rated' : 'popular' }?language=en-US&page=1`, 
        options,
        {next : {revalidate: 10000}})
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));

  return (
    <>
      <MainContainer results={results}/>
    </>
  ) 
}
