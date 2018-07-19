/* eslint no-unused-vars: off */
import React from 'react';
import Text from '../../shared/text';

export default class extends React.Component {
  render() {
    return (
      <section className="banner">
        <Text content="Buy with confindence"/>
        <Text color="gray" weight="light" content="Browse our store and discover awesome stuff."/>
        <Text color="danger" content="Start Buying now!"/>
      </section>
    );
  }
}
