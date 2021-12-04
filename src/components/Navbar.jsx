import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable */
function Navbar() {
  return (
      <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
              <Link className="navbar-brand" to="/">Tread With Friends</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tokensale">Token Sale</Link></li>
                <li><Link to="/cryptocurrencies">Cryptocurrencies</Link></li>
                <li><Link to="/exchanges">Exchanges</Link></li>
                <li><Link to="/news">News</Link></li>
                {/* <li><Link to="/coming-soon">Profile</Link></li> */}
              </ul>
            </div>
          </div>
        </nav>
  );
}
export default Navbar;
