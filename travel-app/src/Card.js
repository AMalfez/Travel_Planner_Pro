import React, { useState } from 'react';
import './css/Card.css'

export default function Card() {
    return (
        <>
            <div className='card__container'>
                <div className='card_img'>
                 <img src={''} alt='an imge' />
                </div>
                <div className='card_details'>
                    <p>Location title <span className='edit-icon'>Edit icon</span></p>
                    <p>Category</p>
                    <p><span>Stars</span><span>start count</span></p>
                    <p>details</p>
                </div>
            </div>
        </>
    )
}