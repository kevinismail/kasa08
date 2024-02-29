import Collapse from '../../components/Collapse'
import aboutImg from '../../data/mountains.jpg'
import aboutData from '../../data/about.json'

export default function About() {
    return (
        <div className='About'>
            <div className="About__banner">
                <img src={aboutImg} alt='montagnes' className='About__banner_img' />
            </div>
            <div className="About__collapse-container">
            {aboutData.map((item, index) => (
                    <Collapse
                        key={index} 
                        title={item.headline}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    );
}