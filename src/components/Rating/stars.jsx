import React from 'react';
import starRed from '../../data/starRed.png';
import starGrey from '../../data/starGrey.png';

const Rating = ({ rating }) => {
    return (
        <div className='Rental__host_rating'>
            {/* Création d'un tableau avec la syntaxe de décomposition */}
            {[...Array(5)].map((star, index) => {
                const starScore = index + 1;
                return (
                    <img key={index} src={starScore <= rating ? starRed : starGrey} alt="étoile" />
                )
            })}
        </div>
    );
}

export default Rating;