import React from 'react';
import './index.css';

function ConnectBtn() {
  return (
    <div className="BtnContainer">
      <div className="wrapper">
        <div className="circle circle1">
          <span>故障检测</span>
          <div className="waveIn wave11 waveBase"></div>
          <div className="wave wave12 waveBase"></div>
          <div className="waveOut wave13 waveBase"></div>
        </div>
        <div className="circle circle2">
          <span>点击联网</span>
          <div className="waveIn wave21 waveBase"></div>
          <div className="wave wave22 waveBase"></div>
          <div className="waveOut wave23 waveBase"></div>
        </div>
        <div className="circle circle3">
          <span>更换账号</span>
          <div className="waveIn wave31 waveBase"></div>
          <div className="wave wave32 waveBase"></div>
          <div className="waveOut wave33 waveBase"></div>
          <div className="liquid"></div>
        </div>
      </div>
    </div>
  );
}
export default ConnectBtn;
