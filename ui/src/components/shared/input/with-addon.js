import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="input-addon">
        {this.props.icon}
        <input
          type={this.props.type}
          value={this.props.value}
          valid={this.props.valid}
          touched={this.props.touched}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          name={this.props.name}
          className="input"
        />
      </div>
    );
  }
}
