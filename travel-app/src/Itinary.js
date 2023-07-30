import React from 'react';
import Card from './Card'
import './css/Itinary.css'

export default function Itinary({date}){
    return(
        <>
        <div className='card_body'style={{marginBottom:'30px'}}>
            <p style={{fontWeight:'600',fontSize:'26px'}}>{date}</p>
            <Card/>
        </div>
        </>
    )
}