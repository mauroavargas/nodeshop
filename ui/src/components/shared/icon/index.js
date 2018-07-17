import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <i className="material-icons">{this.props.name}</i>
    );
  }
}
