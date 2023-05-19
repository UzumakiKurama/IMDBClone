import React from 'react'
const API_KEY = process.env.API_KEY;

const SearchPage = async ({params}) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };
    const searchTerm = params.searchTerm;  
    const searchResults = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
    if(!searchResults.ok){
        // throw new Error("Movie not found");
    }

  return (
    <div>{searchResults.results[0].title}</div>
  )
}

export default SearchPage