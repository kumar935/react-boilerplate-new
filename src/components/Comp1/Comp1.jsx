import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default Comp1;
