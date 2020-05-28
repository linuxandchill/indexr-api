const { gql } = require("apollo-server-express");
module.exports = gql`
  type Link {
    id: ID!
    url: String!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    links: [Link!]
    link(id: ID!): Link
  }

  extend type Mutation {
    createLink(input: createLinkInput!): Link!
  }

  input createLinkInput {
    url: String!
  }

`;
