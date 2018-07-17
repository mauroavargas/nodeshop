/* eslint no-unused-vars: off */
import React from 'react';
import { InputWithIcon } from '../../shared/input';
import Icon from '../../shared/icon';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <InputWithIcon
        type="search"
        placeholder="Search for products..."
        name="searchText"
        value={this.state.searchText}
        onChange={this.handleChange}
        icon={<Icon name="search"/>}
      />
    );
  }
}
