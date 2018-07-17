/* eslint no-unused-vars: off */
import React from 'react';
import { connect } from '../../../store';
import Image from '../../shared/image';
import Text from '../../shared/text';
import Icon from '../../shared/icon';

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
          color="white"
          content={`${this.props.auth.user.firstName} ${this.props.auth.user.lastName}`}
        />
        <Icon name="arrow_drop_down" />
      </div>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(User);
