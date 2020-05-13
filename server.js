const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const {verifyUser } = require('./utils/context');

// set env variables
dotEnv.config();

const runEntry = async () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        context: async ({ req }) => {
            await verifyUser(req)
            return {
                email: req.email,
                loggedInUserId: req.loggedInUserId
            }
        }
    });

    apolloServer.applyMiddleware({ app, path: '/graphql' });

    app.use('/', (req, res, next) => {
        res.send({ message: 'Hello' });
    })

    const PORT = process.env.PORT || 5000;
    const mongoPw = process.env.MONGO_PW;
    await mongoose.connect(`mongodb+srv://testuser:${mongoPw}@cluster0-3qiug.mongodb.net/test?retryWrites=true&w=majority`,  { useFindAndModify: false })
        .then(result => {
            app.listen(PORT, () => {
                console.log('------')
                console.log('------')
                console.log(`Server listening on PORT: ${PORT}`);
                console.log('------')
                console.log('------')
            });
        }).catch(err => {
            console.log(err)
        })
}

runEntry()