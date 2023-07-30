import React, { useState } from 'react'
import axios from 'axios'


function Testing() {
  const [location, setLocation] = useState('London,UK');
  const [days, setDays] = useState('3');
  const URL = 'https://ai-trip-planner.p.rapidapi.com/';
  const options = {
    params: {
      days: days,
      destination: location
    },
    headers: {
      'X-RapidAPI-Key': '4ca9bb3b84mshac2b5b891850fa4p1a5428jsn03c84aa2cd6c',
      'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
    }
  };

    const getTesting=async()=>{
        const result = await axios.get(URL, options); 
        console.log(result.data);
    }

    const handleLocation = (e)=>{
      setLocation(`${e.target.value}`);
    }
    const handleDays =(e)=>{
      setDays(`${e.target.value}`)
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const result = await axios.get(URL, options); 
      console.log(result.data);
    }
  return (
    <div>
        {/* <button onClick={getTesting}>Click</button> */}
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleLocation} value={location} name='location' placeholder='Destination' />
          <input type='text' onChange={handleDays} value={days} name='Days' placeholder='Days' />
          <input type='submit' value='Submit Me' />
        </form>
    </div>
  )
}

export default Testing