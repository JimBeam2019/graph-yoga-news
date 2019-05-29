let links = [
    {
        id: 'link-0',
        url: 'www.google.com',
        description: 'Google Search Engine'
    },
    {
        id: 'link-1',
        url: 'www.wikipedia.com',
        description: 'E-encyclopedia'
    }
];

let idCount = links.length;

const resolvers = {
    Query: {
        info: () => `API of a news clone`,
        feed: () => links,
        link: (parent, args) => links.find(linkObj => linkObj.id === args.id),
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                url: args.url,
                description: args.description, 
            }
            links.push(link)
            return link
        }
    },
    // Link: {
    //     id: (parent) => parent.id,
    //     description: (parent) => parent.description,
    //     url: (parent) => parent.url,
    // }
}

module.exports = {
    resolvers
};