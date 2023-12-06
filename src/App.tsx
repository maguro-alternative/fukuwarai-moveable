import React, { useState, useEffect } from 'react';
import './App.css';

import NijimuraHana from './component/nijimuraHana.tsx';
import NijimuraKuchi from './component/nijimuraKuchi.tsx';
import NijimuraHidarime from './component/nijirurahidarime.tsx';
import NijimuraMigime from './component/nijimuraMigime.tsx';
import NijimuraHidariMayu from './component/nijimuraHidariMayu.tsx';
import NijimuraMigiMayu from './component/nijimuraMigiMayu.tsx';
import NijimuraHidariShiwa from './component/nijimuraHidariShiwa.tsx';
import NijimuraMigiShiwa from './component/nijimuraMigiShiwa.tsx';
import NijimuraMiken from './component/nijimuraMiken.tsx';

//import nijimuraKuti from '/nijimurakuchi.png';
//import nijimuraHana from '/nijimurahana.png';
/*<img src={nijimuraKuti}/>*/

const App = () => {
  return (
    <React.Fragment>
      <NijimuraHana/>
      <NijimuraKuchi/>
      <NijimuraHidarime/>
      <NijimuraMigime/>
      <NijimuraHidariMayu/>
      <NijimuraMigiMayu/>
      <NijimuraHidariShiwa/>
      <NijimuraMigiShiwa/>
      <NijimuraMiken/>
    </React.Fragment>
  );
};
export default App;

