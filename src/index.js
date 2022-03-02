import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// apollo/client import
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


// apollo/client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);