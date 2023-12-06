import React, { useState, useEffect } from 'react';
import Moveable from 'react-moveable';

import nijimuraHana from '/nijimurahana.png';

const NijimuraHana = () => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    setTarget(document.querySelector('.hana'));
  }, []);

  return (
    <>
      <div className={'moveable hana'}><img src={nijimuraHana}/></div>
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

export default NijimuraHana