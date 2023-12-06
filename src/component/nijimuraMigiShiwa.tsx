import React, { useState, useEffect } from 'react';
import Moveable from 'react-moveable';
//import './App.css';

import nijimuraMigiShiwa from '/nijimuramigisiwa.png';
//import nijimuraHana from '/nijimurahana.png';
/*<img src={nijimuraKuti}/>*/

const NijimuraMigiShiwa = () => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.querySelector('.migishiwa'));
  }, []);

  return (
    <>
      <div className={'moveable migishiwa'}><img src={nijimuraMigiShiwa}/></div>
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

export default NijimuraMigiShiwa