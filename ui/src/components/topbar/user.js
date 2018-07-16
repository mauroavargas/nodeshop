/* eslint no-unused-vars: off */
import React from 'react';
import { connect } from '../../store';
import Image from '../image';
import Text from '../text';
import Icon from '../icon';

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <Image
          source={this.props.auth.user.photo}
          height={40}
          width={40}
          radius={100}
        />
        <Text
          content={`${this.props.auth.user.firstName} ${this.props.auth.user.lastName}`}
        />
        <Icon name="arrow_drop_down" />
      </div>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(User);
