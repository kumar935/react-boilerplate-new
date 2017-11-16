import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Comp1 from './Comp1/Comp1';
import Landing from './Landing/Landing';

import './../../svg-icons.font';
import '../style/main.scss';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/comp1" component={Comp1} />
      </Switch>
    </div>
  </BrowserRouter>
);

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept();
}
