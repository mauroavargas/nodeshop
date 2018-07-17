/* eslint no-unused-vars: off */
import React from 'react';
import Text from '../../shared/text';

export default class extends React.Component {
  render() {
    return (
      <header className="brand">
        <div>
          <Text color="gray" weight="bold" content="❤" style={{ color: '#F22613', marginRight: 10 }}/>
          <Text color="gray" weight="bold" content="By Gugadev"/>
        </div>
        <div>
          <a href="https://github.com/gugadev/nodeshop">
            <Text color="gray" weight="bold" content="Source code"/>
          </a>
        </div>
      </header>
    );
  }
}
