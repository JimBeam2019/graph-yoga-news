
const post = (parent, args, context, info) => context.prisma.createLink({
    url: args.url,
    description: args.description,
});

const updateNews = (parent, args, context, info) => context.prisma.updateLink({
    where: { id: args.id },
    data: { url: args.url, description: args.description },
});

const deleteNews = (parent, args, context, info) => context.prisma.deleteLink({
    id: args.id,
});

module.exports = {
    post,
    updateNews,
    deleteNews,
};