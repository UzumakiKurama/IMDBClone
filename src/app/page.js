import HomeContainer from '@/components/HomeContainer/HomeContainer';
import request from '@/utilities/callapi';

export default async function Home(){

  const popularityResults = await request('/movie/now_playing?language=en-US&page=1').then(res=>res.results);

  return (
    <div style={{height: '100vh'}} className='w-full mx-auto my-0 relative'>
      <HomeContainer movieDetails={popularityResults} />
    </div>
  ) 
}
