import PropTypes from 'prop-types'; // ES6
import Plant from './Plant';
import { useState } from "react";
import Switch from '../../node_modules/react-switch/dist/react-switch'; //'./toggle-switch/toggleSwitch';

const plants = [
  {
    name: "Echeveria acutifolia", nickname: "none",
    Varieties: [
      "none"
    ],
    Cultivars: [
      "none"
    ],
    Hybrids: [
      "none"
    ],
    image: "../images/Echavaria.jpg"
  },
  {
    name: "Echeveria acutifolia2", nickname: "none",
    Varieties: [
      "none"
    ],
    Cultivars: [
      "none"
    ],
    Hybrids: [
      "none"
    ],
    image: "../images/Echavaria.jpg"
  },
  {
    name: "Echeveria acutifolia3", nickname: "none",
    Varieties: [
      "none"
    ],
    Cultivars: [
      "none"
    ],
    Hybrids: [
      "none"
    ],
    image: "../images/Echavaria.jpg"
  }
];

function Plants() {
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const handleChange = val => {
    setChecked(val)
  }
  var myList = plants;
  return (
    <div>
      <div>
      <Switch className="react-switch" checked={checked} onChange={handleChange} />
      </div>
      <p>
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p>
      <div>
        <h2>This is my list of plants</h2>
        {checked &&
          <div>
            /<div>Taille de la liste:{myList.length}</div>
            <div className='plantsBox'>
              {myList.map((x, i) => {
                return <Plant plant={x} />
              })}
            </div >
          </div>
        }
        {!checked &&
          <div>
            <div><h2>Another view</h2></div>
            <div className='nextPrevious'>
            
              <div className='previous'><button onClick={() => previous()}><img src='/images/icons8-back-50.png'/></button> </div>
              <div><Plant plant={myList[index]} /></div>
              <div className='next'><button onClick={() => next()}><img src='/images/icons8-forward-50.png'/></button> </div>
            </div>
          </div>
        }
        </div>
      </div>);
      function previous() {
  if (index > 0)
      setIndex(index - 1);
}
      function next() {
  if (index < 2)
      setIndex(index + 1);
}

}

      export default Plants;