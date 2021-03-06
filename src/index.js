import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//const graphqlUri = 'swapi.co/api/'
const graphqlUri = 'http://localhost:3000/graphql/'
const httpLink = new HttpLink({
    uri: graphqlUri,
})
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client = {client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();


