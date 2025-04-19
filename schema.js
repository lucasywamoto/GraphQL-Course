export const typeDefs = `#graphql
type Query {
  hello: [String!]!
  products(filter: ProductsFilterInput): [Product!]!
  product(id: ID!): Product
  categories: [Category!]!
  category(id: ID!): Category
}

  type Product {
      id: ID!
      name: String!
      description: String!
      image: String!
      quantity: Int!
      price: Float!
      onSale: Boolean!
      category: Category!
      reviews: [Review!]!
  }

  type Category {
      id: ID!
      name: String!
      products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
      id: ID!
      date: String!
      title: String!
      comment: String!
      rating: Int!
      productId: Product!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
`;
