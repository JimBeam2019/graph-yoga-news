const info = () => `API of a news clone`;

const feed = (parent, args, context, info) => context.prisma.links();

const link = (parent, args, context, info) => context.prisma.link({id: args.id});

module.exports = {
    info,
    feed,
    link,
};