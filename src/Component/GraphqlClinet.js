import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'http://localhost:4040/graphql',
    cache: new InMemoryCache()
  });

  export default client;