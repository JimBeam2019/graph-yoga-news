import { links } from '../data/links';

let idCount = links.length;

const post = (parent, args) => {
    const link = {
        id: `link-${idCount++}`,
        url: args.url,
        description: args.description, 
    };
    links.push(link);
    return link;
};

const updateNews = (parent, args) => {
    const index = links.findIndex(linkObj => linkObj.id === args.id);
    links[index] = {
        ...links[index],
        url: args.url,
        description: args.description,
    };
    return links[index];
};

const deleteNews = (parent, args) => {
    const index = links.findIndex(linkObj => linkObj.id === args.id);
    const deletedLink = links[index];
    links.splice(index, 1);
    return deletedLink;
};

module.exports = {
    post,
    updateNews,
    deleteNews,
};