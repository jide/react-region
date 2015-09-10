/*global document:false*/
import React from 'react';
import { makeRegion } from '../src/index';

class Example extends React.Component {
  render() {
    return (
      <div className={ this.props.className }>
        <strong>This is a test component, it has props :</strong>
        { Object.keys(this.props).map(i => <div>{ `${i}: ${this.props[i]}` }</div>) }
      </div>
    );
  }
}

const Region = makeRegion({
  Example
});

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      region: [{
        type: 'Example',
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
        type: 'Example',
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
        <Region region={ this.state.region }/>
      </div>
    );
  }
}

const content = document.getElementById('content');

React.render(<App/>, content);
