import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import rentalData from '../../data/logements.json';
import Rating from '../../components/Rating/stars';

export default function RentalPage() {
    const idRental = useParams('id').id;
    const [imgCarousel, setImgCarousel] = useState([]);
    const dataRental = rentalData.find(data => data.id === idRental);
    const navigate = useNavigate();

    useEffect(() => {
        if (!dataRental) {
            navigate('*');
        } else {
            setImgCarousel(dataRental.pictures);
        }
    }, [dataRental, navigate]);

    if (!dataRental) {
        return null;
    }

    return (
        <div className="Rental">
            <Carousel imgCarousel={imgCarousel} />
            <div className="Rental__container">
                <div className="Rental__infos">
                    <h1 className='Rental__infos_title'>{dataRental.title}</h1>
                    <h2 className='Rental__infos_location'>{dataRental.location}</h2>
                    <ul className='Rental__infos_tagbox'>
                        {dataRental.tags.map((tag, index) => (
                            <li key={index} className='Rental__infos_tagbox_tags'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='Rental__host'>
                    <div className='Rental__host_id'>
                        <div className='Rental__host_name'>
                            <p>{dataRental.host.name.split(' ')[0]}</p>
                            <p>{dataRental.host.name.split(' ')[1]}</p>
                        </div>
                        <img src={dataRental.host.picture} alt='propriétaire du lieu' className='Rental__host_picture' />
                    </div>
                    <Rating rating={dataRental.rating} /> {/* Utilisation du composant stars  */}
                </div>
            </div>
            <div className="Rental__collapses">
                <Collapse title={'Description'} className='Rental__collapses_item' content={dataRental.description} />
                <Collapse title={'Équipements'} className='Rental__collapses_item' content={dataRental.equipments.map((equipement, index) => (
                    <div key={index} className='Rental__collapses_equipements'>{equipement}</div>
                ))} />
            </div>
        </div>
    );
}
