const { gql } = require('apollo-server-express');
const linkTypeDefs = require('./link')

const typeDefs = gql`
  scalar Date 
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

