import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { connectDatabase } from "./database";
import { buildSchema } from "type-graphql";
import { StudentResolver } from "./schemas/resolvers";

async function startApolloServer() {
  const connection = await connectDatabase();

  const schema = await buildSchema({
    resolvers: [StudentResolver],
    validate: false,
  });
  const server = new ApolloServer({ schema });
  await server.listen(4000);

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

export default startApolloServer;
