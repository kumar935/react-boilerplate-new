import React from 'react'; // can't remove this dependency even though it directly doesn't seem to be used because jsx gets transpiled to React.createElement
import { render } from 'react-dom';
import Comp1 from './Comp1/Comp1';

import '../scss/main.scss';

const HelloWorld = (
  <div>
    <h3>Hello World!</h3>
    <Comp1 />
  </div>
);

const renderApp = () => {
  render(HelloWorld, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept();
}
