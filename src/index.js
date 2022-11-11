import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import Home from './pages/Home.js'
import Error from './components/system/Error'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error msg="Deze pagina is er niet" />,
  },
  {
    path: "/contact",
    element: <Home />,
  },

]);



// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
//UIkit.notification('Hello world.');

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clacw9ipz0pnp01ul7gww06xt/master',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </ApolloProvider>
);