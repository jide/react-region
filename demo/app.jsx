/*global document:false*/
import React from 'react';
import { makeRegion } from '../src/index';

import Badge from './Badge';

const Region = makeRegion({
  Badge
});

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      region: [{
        type: 'Badge',
        props: {
          key: 'some-example',
          test: 'This is an example component',
          className: 'some-class'
        }
      }]
    }
  }

  handleClick() {
    this.setState({
      region: [{
        type: 'Badge',
        props: {
          key: 'some-example',
          test: 'This is an example component that has been updated',
          className: 'some-other-class'
        }
      }]
    });
  }

  render() {
    return (
      <div className='demo'>
        <button onClick={ ::this.handleClick }>Click me</button>
        <br/><br/>
        <Region className='test-region' id='region-id' region={ this.state.region }/>
      </div>
    );
  }
}

const content = document.getElementById('content');

React.render(<App/>, content);
