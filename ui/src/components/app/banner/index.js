/* eslint no-unused-vars: off */
import React from 'react';
import Text from '../../shared/text';

export default class extends React.Component {
  render() {
    return (
      <section className="banner">
        <Text color="gray" content="Buy with confindence" style={{ fontSize: 15 }}/>
        <Text weight="light" content="Browse our store and discover awesome stuff." style={{ fontSize: 15 }}/>
        <Text color="danger" content="Start Buying now!" style={{ fontSize: 15 }}/>
      </section>
    );
  }
}
