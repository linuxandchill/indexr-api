// const { GraphQLDateTime } = require('graphql-iso-date');
const linkResolver = require('./link')

// const customDateScalarResolver = {
//     Date: GraphQLDateTime
// };

module.exports = [
    linkResolver,
]