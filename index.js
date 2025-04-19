import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Category } from "./resolvers/Category.js";
import { Product } from "./resolvers/Product.js";
import { products, categories, reviews } from "./data.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      products,
      categories,
      reviews,
    };
  },
});
console.log(`🚀 Server ready at ${url}`);
