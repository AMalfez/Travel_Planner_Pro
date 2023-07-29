import React from 'react'
import axios from 'axios'
const URL = 'https://ai-trip-planner.p.rapidapi.com/';

const options = {
    params: {
      days: '3',
      destination: 'London,UK'
    },
    headers: {
      'X-RapidAPI-Key': '4ca9bb3b84mshac2b5b891850fa4p1a5428jsn03c84aa2cd6c',
      'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
    }
  };
function Testing() {
    const getTesting=async()=>{
        const result = await axios.get(URL, options); 
        console.log(result.data);
    }
  return (
    <div>
        <button onClick={getTesting}>Click</button>
    </div>
  )
}

export default Testing