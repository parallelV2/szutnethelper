/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Typography, Card } from 'antd';
import './index.less';

const { Paragraph, Text } = Typography;
const InfoBoard = () => {
  const [ip, setIP] = useState('10.1.157.33');
  const [mac, setMac] = useState('sdasdasdsadsad');
  return (
    <div className="InfoBoard container">
      <div className="mask" />
      <div className="content">
        <div>
          IP地址:
          <Text className="right" copyable={{ text: ip }}>
            {ip}
          </Text>
        </div>
        <div>
          MAC地址:
          <Text className="right" copyable={{ text: mac }}>
            {mac}
          </Text>
        </div>
      </div>
    </div>
  );
};
export default InfoBoard;
