/* eslint no-unused-vars: off */
import React from 'react';
import uuid from 'uuid';
// import { Query } from 'react-apollo';
import Banner from '../../components/app/banner';

export default class extends React.Component {
  render() {
    return (
      <div className="page home" style={{ padding: 0 }}>
        <Banner key="b4nn3r" />
      </div>
    );
  }
}

/*
This is the Apollo way to do a GraphQL request.
Cons: on every update, the component will re-fetch the data.
has it or no sense for you?
<Query key={uuid.v4()} query={findByEmail('gusgarzaki@gmail.com')}>
  {
    ({ loading, error, data }) => {
      if (loading) { return <p>Loading...</p>; }
      if (error) { return <p>Error: {error.toString()}</p>; }
      return (
        <ul>
          <li>{data.aboutSomeone.firstName}</li>
          <li>{data.aboutSomeone.lastName}</li>
          <li>{data.aboutSomeone.email}</li>
        </ul>
      );
    }
  }
</Query>
*/

/*
This is the "vanilla" way to do a query using the client of Apollo
and not the Query react component that Apollo provide us. This way
give us a extra of flexibility if you want to update the component'
state with the properties that the client returns, like "loading".

constructor(props) {
  super(props);
  this.state = {
    loading: true,
    user: {},
    error: null
  };
}

componentDidMount() {
  aboutSomeone('gusgarzaki@gmail.com')
    .then(({ loading, data, error }) => {
      this.setState({
        loading,
        error,
        user: data.aboutSomeone
      });
    });
}

<p key={uuid.v4()} style={{ display: this.state.loading ? 'block' : 'none' }}>Loading...</p>,
<ul key={uuid.v4()} style={{ display: !this.state.loading ? 'inline-block' : 'none' }}>
  <li>{this.state.user.firstName}</li>
  <li>{this.state.user.lastName}</li>
  <li>{this.state.user.email}</li>
</ul>
*/
