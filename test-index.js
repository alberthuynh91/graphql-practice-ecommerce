const { ApolloServer, gql } = require("apollo-server");

// ! is used for non-nullable fields
// Scalar types include String, Int, Float, and Boolean
const typeDefs = gql`
  type Query {
    hello: String! 
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
    helloArr: [String!]!
  }
`

// Name of resolver fn must match the property in the Query in the typeDefs above
const resolvers = {
  Query: {
    hello: () => {
      return "World"
    },
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 234323.342;
    },
    isCool: () => {
      return false;
    },
    helloArr: () => {
      return ["Hello", "World"]
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url)
})