import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { 
    APP_SECRET,
    getUserId,
 } from '../utils';

const post = (parent, args, context, info) => {
    const userId = getUserId(context);
    return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: {
            connect: {
                id: userId
            }
        },
    });
};

const updateNews = (parent, args, context, info) => context.prisma.updateLink({
    where: { id: args.id },
    data: { url: args.url, description: args.description },
});

const deleteNews = (parent, args, context, info) => context.prisma.deleteLink({
    id: args.id,
});

async function signup(parent, args, context, info) {
    const password = await bcryptjs.hash(args.password, 10);
    const user = await context.prisma.createUser({
        ...args,
        password,
    });
    const token = jwt.sign({
        userId: user.id,
    }, APP_SECRET);

    return {
        token,
        user,
    };
}

async function login(parent, args, context, info) {
    const user = await context.prisma.user({
        email: args.email,
    });
    if (!user) {
        throw new Error('No such user found.');
    }

    const valid = await bcryptjs.compare(args.password, user.password);
    if (!valid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({
        userId: user.id,
    }, APP_SECRET);

    return {
        token,
        user,
    };
}

module.exports = {
    post,
    updateNews,
    deleteNews,
    signup,
    login,
};