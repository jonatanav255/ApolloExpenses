import { typeDefs } from './schema';
import { resolvers } from './resolvers';
const { ApolloServer } = require('apollo-server-express');


import express, { Application } from 'express';


async function startApolloServer() {
  
  const app: Application = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer();

