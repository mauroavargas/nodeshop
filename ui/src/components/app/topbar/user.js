/* eslint no-unused-vars: off */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from '../../../store';
import Image from '../../shared/image';
import Text from '../../shared/text';

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
          color="gray"
          weight="bold"
          content={`${this.props.auth.user.firstName} ${this.props.auth.user.lastName}`}
        />
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(User);
