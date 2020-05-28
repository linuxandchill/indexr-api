const { gql } = require('apollo-server-express');
const linkTypeDefs = require('./link')

const typeDefs = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [
  typeDefs,
  linkTypeDefs,
]

