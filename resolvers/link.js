module.exports = {
  Query: {
    links: async (parent, args, ctx, info) => {
      try {
        const links = await Link.find();
        return links;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    link: async (parent, args, ctx, info) => {
      try {
        const link = await Link.findOne({ _id: id });
        if (!link) {
          throw new Error("Link not found");
        }
        return link;
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },

  Mutation: {
    createLink: async (parent, args, context, info) => {
      try {
        console.log(args);
        return "CREATED"
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  }
};
