// import ApolloClient from 'apollo-boost';
import { GRAPHQL_URL } from '../apis/url';
import { defaults, resolvers } from './LocalState';
import cookie from 'js-cookie';

import { ApolloClient, HttpLink, split, InMemoryCache } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({
  uri: `${GRAPHQL_URL}`,
  headers: {
    authorization: `Bearer ${cookie.get('token')}`,
  },
});

const wsLink = new WebSocketLink({
  uri: `ws://${GRAPHQL_URL}`,
  options: { reconnect: true },
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache();

cache.writeData({
  data: defaults,
});

export default new ApolloClient({
  link,
  cache,
  resolvers,
});
