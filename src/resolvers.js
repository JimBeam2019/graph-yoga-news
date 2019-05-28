let links = [
    {
        id: '00000001',
        url: 'www.google.com',
        description: 'Google Search Engine'
    },
    {
        id: '00000002',
        url: 'www.wikipedia.com',
        description: 'E-encyclopedia'
    }
];

const resolvers = {
    Query: {
        info: () => `API of a news clone`,
        feed: () => links,
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }
}

module.exports = {
    resolvers
};