import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "mobx-react";
import { Navbar, Button, DropdownButton, Dropdown, Container, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3Initilizer from './web3Initializer';
import StakerDashboard from './dashboards/StakerDashboard/StakerDashboard';
import WithdrawDashboard from './dashboards/WithdrawDashboard/WithdrawDashboard';
import HistoryDashboard from './dashboards/HistoryDashboard/HistoryDashboard';
import WorkLockDashboard from './dashboards/WorkLockDashboard/WorkLockDashboard';
import './App.scss';
import {StoreProvider} from './stores';

class App extends PureComponent {
  state = {
    key: 'stake'
  };

  handleSelectTab(key) {
    this.setState({ key });
  }

  render() {
    return <>
      <StoreProvider>
        <Router>
          <Navbar expand="lg">
            <Navbar.Brand href="#" className="mr-auto">
              <div className="logo">
                <svg width="100" height="100" viewBox="0 0 757 350" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M505.752 0.195423L457.487 23.0953C457.242 23.2111 457.022 23.3741 456.839 23.5751C456.657 23.7762 456.516 24.0112 456.424 24.2668C456.333 24.5223 456.293 24.7935 456.306 25.0646C456.32 25.3357 456.387 25.6014 456.503 25.8467L529.908 180.584C557.183 238.148 549.878 281.814 508.408 301.547C474.848 317.474 445.878 306.362 423.275 267.559L336.363 84.3358C301.119 10.0622 253.115 -9.62392 196.17 17.3911C159.124 34.9663 137.636 66.3811 138.063 106.251C138.071 106.722 137.918 107.182 137.629 107.554C137.339 107.926 136.932 108.188 136.473 108.296C136.014 108.404 135.533 108.352 135.108 108.148C134.683 107.945 134.34 107.602 134.137 107.176L115.164 67.1993C115.048 66.9538 114.885 66.7336 114.684 66.5515C114.482 66.3694 114.247 66.2291 113.991 66.1387C113.735 66.0482 113.464 66.0095 113.193 66.0246C112.922 66.0397 112.657 66.1085 112.412 66.2269L64.1596 89.0557C63.6758 89.2893 63.3029 89.7033 63.1211 90.2089C62.9392 90.7145 62.963 91.2713 63.1872 91.7596L196.478 372.82C196.715 373.314 197.136 373.694 197.651 373.879C198.167 374.063 198.734 374.036 199.23 373.805L247.494 350.905C247.74 350.789 247.96 350.626 248.143 350.425C248.325 350.224 248.466 349.989 248.557 349.733C248.649 349.478 248.689 349.207 248.675 348.935C248.662 348.664 248.595 348.399 248.479 348.153L177.125 197.744C148.06 136.456 153.574 92.139 198.139 70.9943C232.339 54.771 258.926 65.6814 282.798 107.248C282.83 107.296 282.858 107.348 282.881 107.402L368.939 288.846C402.143 358.815 453.716 382.841 508.183 357C550.281 337.03 567.737 306.967 566.717 267.428C566.706 266.956 566.857 266.495 567.146 266.12C567.434 265.746 567.842 265.483 568.301 265.373C568.761 265.263 569.244 265.314 569.67 265.518C570.096 265.722 570.439 266.065 570.643 266.492L589.806 306.896C589.922 307.141 590.085 307.361 590.286 307.544C590.487 307.726 590.722 307.867 590.978 307.959C591.233 308.05 591.504 308.09 591.775 308.077C592.046 308.063 592.312 307.996 592.557 307.88L640.822 284.98C641.068 284.864 641.288 284.701 641.47 284.5C641.652 284.299 641.792 284.063 641.883 283.807C641.973 283.551 642.012 283.28 641.997 283.009C641.982 282.738 641.913 282.473 641.794 282.229L508.503 1.17973C508.267 0.686051 507.845 0.305631 507.33 0.121286C506.815 -0.06306 506.248 -0.0364116 505.752 0.195423Z" fill="#1E65F3"></path></svg>
              </div>
            </Navbar.Brand>
            <div className="mr-sm-2">
              <DropdownButton
                title="Cassandra"
                variant="secondary"
                className="d-inline-block network-selector"
              >
                <Dropdown.Item eventKey="cassandra">Cassandra</Dropdown.Item>
              </DropdownButton>
            </div>
          </Navbar>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <div className="staker-container">
                  <Container>
                    <Tabs defaultActiveKey="stake" activeKey={this.state.key} className="tab-controls d-flex mx-auto" onSelect={this.handleSelectTab.bind(this)}>
                      <Tab eventKey="stake" title="Stake">
                        <StakerDashboard onTabChange={this.handleSelectTab.bind(this)}></StakerDashboard>
                      </Tab>
                      <Tab eventKey="withdraw" title="Withdraw">
                        <WithdrawDashboard></WithdrawDashboard>
                      </Tab>
                      <Tab eventKey="history" title="History">
                        <HistoryDashboard></HistoryDashboard>
                      </Tab>
                    </Tabs>
                  </Container>
                </div>
              </Route>
              <Route path="/worklock">
                <div className="staker-container">
                  <Container>
                    <WorkLockDashboard></WorkLockDashboard>
                  </Container>
                </div>
              </Route>
            </Switch>
          </div>
          {
            /*
              <div className="footer p-2">
                <a href="https://github.com/cryptoseal86/stake-nucypher">github</a>
              </div>
            */
          }
        </Router>
      </StoreProvider>
    </>;
  }
}

export default App;
