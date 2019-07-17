// import ApolloClient from 'apollo-boost';
import { ROOT_URL } from '../apis/config';
import { defaults, resolvers } from './LocalState';
import cookie from 'js-cookie';

import { ApolloClient, HttpLink, split, InMemoryCache } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({
  uri: `${ROOT_URL}`,
  headers: {
    authorization: `Bearer ${cookie.get('token')}`,
  },
});

const wsLink = new WebSocketLink({
  uri: `ws://${ROOT_URL}`,
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
