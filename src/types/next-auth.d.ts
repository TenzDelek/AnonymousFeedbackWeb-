import 'next-auth'

//changing the module of next auth
declare module 'next-auth'
{
    interface User{
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string
    }
}