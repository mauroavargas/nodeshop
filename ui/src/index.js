/* eslint no-unused-vars: off */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloProvider } from 'react-apollo';
// import ApolloClient from './graph/client';
import { Provider } from './store';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

/*
We need to use the ApolloProvider if we want to use Query component
<ApolloProvider client={ApolloClient}>
  <App />
</ApolloProvider>
*/
