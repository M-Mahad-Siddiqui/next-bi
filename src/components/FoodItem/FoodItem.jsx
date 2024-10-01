import React from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';

function FoodItem({ item }) {
    const { id, name, image, price, description } = item; // Destructuring correctly

    return (
        <div className='food-item' key={id}>
            <div className='food-item-image-container'>
                <img src={image} alt={name} className='food-item-image' />
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p className='food-item-name'>{name}</p>
                    <img src={assets.rating_starts} alt=""  />
                </div>
            </div>
            <p className='food-item-description'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    );
}

export default FoodItem;
