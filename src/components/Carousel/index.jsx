import arrowLeft from '../../data/arrow_left.png'
import arrowRight from '../../data/arrow_right.png'
import { useState } from 'react'

export default function Carousel({ imgCarousel }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImg = () => {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex === imgCarousel.length - 1)
            setCurrentIndex(0)
    }

    const prevImg = () => {
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0)
            setCurrentIndex(imgCarousel.length - 1)
    }

    return (
        <div style={{ backgroundImage: `url(${imgCarousel[currentIndex]})` }} className='Carousel'>
            {imgCarousel.length > 1 && (
                // Les éléments suivants s'affichent SI le carousel comporte plus d'une image
                <>
                    <img src={arrowLeft} alt="flèche gauche" className="Carousel__arrow-left" id="arrowL" onClick={prevImg} />
                    <img src={arrowRight} alt="flèche droite" className="Carousel__arrow-right" id="arrowR" onClick={nextImg} />
                    <p className='Carousel__img_count'>{currentIndex + 1}/{imgCarousel.length}</p>
                </>
            )}
        </div>
    );
}