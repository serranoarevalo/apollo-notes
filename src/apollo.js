import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { typeDefs, defaults, resolvers } from "./resolvers";
import { ApolloLink } from "apollo-link";

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers,
  typeDefs,
  defaults
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
});

export default client;
