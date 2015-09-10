import React from 'react';

export default class Badge extends React.Component {
  render() {
    return (
      <div className={ this.props.className }>
        <strong>This is a test component, it has props :</strong>
        { Object.keys(this.props).map(i => <div key={ i }>{ `${i}: ${this.props[i]}` }</div>) }
      </div>
    );
  }
}
