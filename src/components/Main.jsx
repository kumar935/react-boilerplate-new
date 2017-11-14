import React from 'react'; // can't remove this dependency even though it directly doesn't seem to be used because jsx gets transpiled to React.createElement
import { render } from 'react-dom';

const HelloWorld = <h3>Hello World!</h3>;

const renderApp = () => {
  render(HelloWorld, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept();
}
