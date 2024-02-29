import collArrow from '../../data/arrow_collapse.png';
import { useState } from 'react';

/*export default function Collapse({ title, content }) {

    const [toggle, setToggle] = useState(false); */

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
 
  const toggleCollapse = () => {
     setIsCollapsed(!isCollapsed);
  };

    return (
        //<div className="Collapse" >//
        <div className={`Collapse ${isCollapsed ? "" : "Collapse--active"}`}>

            <h3 className='Collapse__title' onClick={toggleCollapse}>  
                {title}
                <img
                 /*   onClick={() => setToggle(!toggle)}
                    className={toggle ? 'Arrow Arrow__up' : 'Arrow Arrow__down'}
                    src={collArrow}
                    alt="contenu visible"*/
                    className="Collapse__icon"
                    src={collArrow}
                    alt="Flèche"
                  
                />
            </h3>
            <div className={`Collapse__content ${isCollapsed ? "Collapse__content_hidden" : ""}`}>
        {Array.isArray(content) ? content.map((item, index) => {
          return (<div key={index}>{item}</div>)
        }) : content}
            </div>
        </div>
    );
}
export default Collapse;
