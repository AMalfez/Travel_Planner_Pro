import React, { useState } from 'react';
import './css/Card.css'
import Star from './Star';

export default function Card({data}) {
    return (
        <>
            <div className='card__container'>
                <div className='card_img'>
                 <img src={data.result_object.photo.images.small.url} alt='an imge' />
                </div>
                <div className='card_details'>
                    <p style={{fontSize:'25px', fontWeight:'600'}}>{data.result_object.location_string} <span className='edit-icon'>Edit icon</span></p>
                    <p style={{ color:'lightgrey'}}>{data.result_object.category.name}</p>
                    <p><span><Star rating={data.result_object.rating}/></span></p>
                    <p>details</p>
                </div>
            </div>
        </>
    )
}