import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import User from './resolvers/User';
import Link from './resolvers/Link';

const resolvers = {
    Query,
    Mutation,
    User,
    Link,
}

module.exports = {
    resolvers
};