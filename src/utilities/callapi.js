import React from 'react'
const API_KEY = process.env.API_KEY
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };

const request = async (url) => {
  
    const result = await fetch(`https://api.themoviedb.org/3${url}`,options,{next : {revalidate: 10000}})
                .then(response => response.json())
                .then(response => response.results)
                .catch(err => console.error(err));
  
    return result;
}

export default request