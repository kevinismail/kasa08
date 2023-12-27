import '../../sass/main.css'
import { Link } from 'react-router-dom'
export default function Card(props) {

    return (
        <Link to={`rentalpage/${props.id}`} >
            <div className="Card">
                <img src={props.cover} alt={props.title} className='Card__img' />
                <h3 className='Card__title'>{props.title}</h3>
            </div>
        </Link>
    );
}