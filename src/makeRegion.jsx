import React, { Component } from 'react';
import Region from './Region';

export default (types = {}) => {
  return class extends Component {
    render() {
      return <Region types={ types } { ...this.props }/>;
    }
  };
};
