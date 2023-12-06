import React, { useState, useEffect } from 'react';
import Moveable from 'react-moveable';
//import './App.css';

import nijimuraKuchi from '/nijimurakuchi.png';
//import nijimuraHana from '/nijimurahana.png';
/*<img src={nijimuraKuti}/>*/

const NijimuraKuchi = () => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.querySelector('.kuchi'));
  }, []);

  return (
    <>
      <div className={'moveable kuchi'}><img src={nijimuraKuchi}/></div>
      <Moveable
        target={target}
        draggable={true}
        scalable={true}
        rotatable={true}
        origin={false}
        throttleScale={0}
        keepRatio={true}
        onDrag={e => {
          e.target.style.transform = e.transform;
        }}
        onScale={e => {
          e.target.style.transform = e.transform;
        }}
        onRotate={e => {
          e.target.style.transform = e.transform;
        }}
      />
    </>
  );
};

export default NijimuraKuchi