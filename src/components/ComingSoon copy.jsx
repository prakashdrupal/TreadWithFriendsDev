import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const ComingSoon = () => {
  //const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
 // const { data } = useGetCryptosQuery(100);
 // const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

 // if () return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      <h1>Coming Soon</h1>
    </Row>
  );
};

export default ComingSoon;
