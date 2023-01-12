const { gql } = require("apollo-server");

// ! is used for non-nullable fields
// Scalar types include String, Int, Float, and Boolean
// Best practice for array is to make them non-nullable (!) so that they return empty array instead of null
exports.typeDefs = gql`
  type Query {
    hello: String! 
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: String!
    category: Category
    reviews: [Review!]!
    avgRating: Int!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!,
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: String!
  }

  input AddReviewInput {
    id: ID!,
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }
`
