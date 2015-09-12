import React, { Component } from 'react';
import Region from './Region';

export default (types = {}, RegionComponent = Region) => { console.log('ttttt');
  return class RegionContainer extends Component {
    render() {
      return <RegionComponent types={ types } { ...this.props }/>;
    }
  };
};
