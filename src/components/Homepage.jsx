import React from 'react';
import { Typography } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
import Footer from './Footer';
import Navbar from './Navbar';
/* eslint-disable */


const { Title } = Typography;

const Homepage = () => {
   const { data, isFetching } = useGetCryptosQuery(10);
   const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Navbar />
      {/* 
      <!-- First Container --> */}
      <div className="container-fluid bg-1 text-center">
        <h3 className="margin">Who Am I?</h3>
        <img src="/img/mansih.jpeg" className="img-responsive img-circle margin" style={{display: "inline"}} alt="Bird" width="350" height="350" />
        <h3>I'm Manish Kumar(Mani)</h3>
      </div>

      {/* <!-- Second Container --> */}
      <div className="container-fluid bg-2 text-center">
        <h3 className="margin">What Am I?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        {/* <a href="#" className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-search"></span> Search
        </a> */}
      </div>

      {/* <!-- Third Container (Grid) --> */}
      <div className="container-fluid bg-3 text-center">
        <h3 className="margin">Where To Find Me?</h3><br />
        <div className="row">
          <div className="col-sm-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src="/img/Trade1.png" className="img-responsive margin" style={{ width: "100%" }} alt="Image" />
          </div>
          <div className="col-sm-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src="/img/Trade2.png" className="img-responsive margin" style={{ width: "100%" }} alt="Image" />
          </div>
          <div className="col-sm-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src="/img/Trade3.png" className="img-responsive margin" style={{width: "100%"}} alt="Image" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
