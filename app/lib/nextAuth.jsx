
// lib/nextAuth.js
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                },
            },
            httpOptions: {
                timeout: 10000, // تحديد مهلة قدرها 10 ثواني
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 72 * 60 * 60, // فترة انتهاء الجلسة 72 ساعة
    },
    secret: process.env.NEXTAUTH_SECRET,
};

