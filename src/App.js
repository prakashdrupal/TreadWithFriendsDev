import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Tokensale, ComingSoon } from './components';
import './App.css';
/* eslint-disable */
const App = () => (
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/tokensale">
              <Tokensale />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/coming-soon">
              <ComingSoon />
            </Route>
          </Switch>
        </div>
      </Layout>
);

export default App;
