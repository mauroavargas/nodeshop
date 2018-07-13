import React from 'react';
import User from '../../models/user';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new User()
    };
  }

  render() {
    return (
      <div className="user">
        <figure className="user__photo">
          <img src="" alt="user avatar" className="photo"/>
        </figure>
        <span className="user__name">{this.state.user.fullName}</span>
      </div>
    );
  }
}
