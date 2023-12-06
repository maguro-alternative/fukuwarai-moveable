import React, { useState, useEffect } from 'react';
import Moveable from 'react-moveable';
//import './App.css';

import nijimuraHidarime from '/nijimurahidarime.png';
//import nijimuraHana from '/nijimurahana.png';
/*<img src={nijimuraKuti}/>*/

const NijimuraHidarime = () => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.querySelector('.hidarime'));
  }, []);

  return (
    <>
      <div className={'moveable hidarime'}><img src={nijimuraHidarime}/></div>
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

export default NijimuraHidarime