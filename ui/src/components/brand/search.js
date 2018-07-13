import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    return (
      <div className="input-search">
        <input type="search" className="input" placeholder="Search for products"/>
        <i className="material-icons">search</i>
      </div>
    );
  }
}
