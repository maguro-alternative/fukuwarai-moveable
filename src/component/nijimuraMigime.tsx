import React, { useState, useEffect } from 'react';
import Moveable from 'react-moveable';
//import './App.css';

import nijimuraMigime from '/nijimuramigime.png';
//import nijimuraHana from '/nijimurahana.png';
/*<img src={nijimuraKuti}/>*/

const NijimuraMigime = () => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.querySelector('.migime'));
  }, []);

  return (
    <>
      <div className={'moveable migime'}><img src={nijimuraMigime}/></div>
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

export default NijimuraMigime