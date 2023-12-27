import '../../sass/main.css';
import Card from '../../components/Card';
import homeImg from '../../data/seafront.jpg';
import cardData from '../../data/logements.json';

export default function Home() {

  return (
    <div className="Home">
      <div className="Home__banner">
        <img src={homeImg} alt="front de mer" className='Home__banner_img' />
        <span className='Home__banner_text'>Chez vous,<br/> partout et ailleurs</span>
      </div>
      <div className="Home__cardlist">
        {cardData.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} id={item.id} />))}
      </div>
    </div>
  );
}