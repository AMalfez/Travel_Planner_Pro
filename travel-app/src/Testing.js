import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Itinary  from './Itinary';
import './css/Testing.css'


function Testing() {
  const [location, setLocation] = useState('');
  const [days, setDays] = useState('');
  const [date, setDate] = useState([]);
  const [data,setData] = useState('');
  const [display, setDisplay] = useState(false)
  useEffect(()=>{
    const curr = Date.now();
    setDate([...formatDate(curr)]);
  },[days])

  function formatDate(date) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const currentDate = new Date(date);
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
  
    const dateArray = [];
    for(let i=0; i<days; i++){
      dateArray[i] = `${month} ${(day+i)%29}`; // fix date overflow bug
    }
    return dateArray;
  }

  const URL = 'https://travel-advisor.p.rapidapi.com/locations/search';
  const options = {
    params: {
    query: `${location}`,
    offset: '0',
    units: 'km',
    lang: 'en_US',
    limit: `${days*3}`
  },
  headers: {
    'X-RapidAPI-Key': '4ca9bb3b84mshac2b5b891850fa4p1a5428jsn03c84aa2cd6c',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
  };

    const handleLocation = (e)=>{
      setLocation(`${e.target.value}`);
    }
    const handleDays =(e)=>{
      setDays(`${e.target.value}`)
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const result = await axios.get(URL, options); 
      console.log(result.data.data);
      console.log(result.data.data.filter((elem)=> elem.result_type === 'things_to_do'));
      setData(result.data.data.filter((elem)=> elem.result_type === 'things_to_do'))
      // setDisplay(true);
    }

    
  return (
    <div className='testing__container'>
        <form onSubmit={handleSubmit} style={{marginBottom:'50px'}}>
          <input className='input-destination' type='text' onChange={handleLocation} value={location} name='location' placeholder='Destination' />
          <input className='input-days' type='text' onChange={handleDays} value={days} name='Days' placeholder='Days' />
          <button type='submit'>Submit</button>
        </form>
          {display && <Itinary date={date} data={data} />}
    </div>
  )
}

export default Testing