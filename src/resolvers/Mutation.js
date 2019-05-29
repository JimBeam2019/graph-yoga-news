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

const update = (parent, args) => {
    const index = links.findIndex(linkObj => linkObj.id === args.id);
    links[index] = {
        ...links[index],
        url: args.url,
        description: args.description,
    };
    return links[index];
};

module.exports = {
    post,
    update,
};