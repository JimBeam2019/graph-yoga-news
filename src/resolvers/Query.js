import { links } from '../data/links';

const info = () => `API of a news clone`;

const feed = () => links;

const link = (parent, args) => links.find(linkObj => linkObj.id === args.id);

module.exports = {
    info,
    feed,
    link,
};