import express from 'express';
import bodyParser from 'body-parser';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import {
  makeExecutableSchema,
} from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const myGraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: myGraphQLSchema,
  context: {
    models,
  },
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

models.sequelize.sync({ force: true }).then(() => app.listen(PORT));
