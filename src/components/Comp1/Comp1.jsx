import React, { Component } from 'react';
import avatar from './../../style/images/avatar.png';

class Comp1 extends Component {
  constructor() {
    super();
    this.state = {
      thing: 'stuff',
    };
  }
  render() {
    return (
      <div>
        <h4>hello comp12</h4>
        <span className="svgicons svgicons-cloud" />
        <img src={avatar} alt="hi" />
        <div id="dummy-img" />
      </div>
    );
  }
}

export default Comp1;
