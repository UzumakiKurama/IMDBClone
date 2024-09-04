const API_KEY = process.env.API_KEY
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    },
    next: { revalidate: 60 } 
  };

const request = async (url) => {

  try{
    const result = await fetch(`https://api.themoviedb.org/3${url}`,options)
                  .then(response => response.json())
                  .catch(err => console.error(err));

    return result;
  }catch(error){
    console.log(error);
  }

}

export default request