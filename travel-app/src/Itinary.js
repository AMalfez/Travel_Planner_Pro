import React from 'react';
import Card from './Card'
import './css/Itinary.css'

export default function Itinary({date, data}){
    return(
        <>
        <div className='card_body'style={{marginBottom:'30px'}}>
            {date.map((dt)=>(
                <div>
                <p style={{fontWeight:'600',fontSize:'26px'}}>{dt}</p>
                <Card data={data[date.indexOf(dt)]}/>
                </div>
            ))}
            
        </div>
        </>
    )
}