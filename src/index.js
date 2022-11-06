import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
//UIkit.notification('Hello world.');

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.hygraph.com/v2/ckppbslrxtjkc01z68jh97f2o/master',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </ApolloProvider>
);