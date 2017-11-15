import React, { Component } from 'react';
import comp1 from './comp1.css';

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
        <h3> Comp1 {this.state.thing} </h3>
        <p className={comp1.para}> hello there comp1 </p>
      </div>
    );
  }
}

export default Comp1;
