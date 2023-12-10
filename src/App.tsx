import React, { useState } from 'react';
import './App.css';

import NijimuraHana from './component/nijimuraHana.tsx';
import NijimuraKuchi from './component/nijimuraKuchi.tsx';
import NijimuraHidarime from './component/nijiruraHidarime.tsx';
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
  // useState()で画像のパスを保持
  // ※デフォルトで表示する画像を初期値で指定(この例ではpublicフォルダのdefault-profile.pngを指定)
  const [profileImage, setProfileImage] = useState('seitoukoukeisya.png');

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    // React.ChangeEvent<HTMLInputElement>よりファイルを取得
    const fileObject = e.target.files[0];
    // オブジェクトURLを生成し、useState()を更新
    setProfileImage(window.URL.createObjectURL(fileObject));
  };
  return (
    <React.Fragment>
      <div style={{backgroundImage: `url('${profileImage}')`, width: '100%', height: '100%'}}>
        <input type="file" accept="image/*" onChange={onFileInputChange} className="pl-4" />
        <NijimuraHana/>
        <NijimuraKuchi/>
        <NijimuraHidarime/>
        <NijimuraMigime/>
        <NijimuraHidariMayu/>
        <NijimuraMigiMayu/>
        <NijimuraHidariShiwa/>
        <NijimuraMigiShiwa/>
        <NijimuraMiken/>
      </div>
    </React.Fragment>
  );
};
export default App;

