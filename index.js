const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema")
const { Query } = require("./resolvers/Query")
const { Category } = require("./resolvers/Category")
const { Product } = require("./resolvers/Product")
const { Mutation } = require("./resolvers/Mutation")
const { products, categories, reviews } = require("./db")

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Mutation,
  },
  context: {
    categories,
    products,
    reviews,
  }
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url)
})