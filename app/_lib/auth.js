import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

// AuthConfig oluşturup içerisinde providers dizisini veriyoruz ve provider'larımızı env variable'larımızla dolduruyoruz.
const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    // We need to spesify callbacks to handle user authorized or not. Callbacks are moving one another
    callbacks: {
        // auth: Current session, request: request object
        authorized({ auth, request }) {
            // This trick returns a value to a boolean
            return !!auth?.user;
        },
        // signIn method takes user - account & profile as default
        async signIn({ user, account, profile }) {
            try {
                // if already we had a guest created in database.
                const existingGuest = await getGuest(user.email);

                // if we don't have any, create a new one
                if (!existingGuest)
                    await createGuest({
                        email: user.email,
                        fullName: user.name,
                    });
                return true;
            } catch {
                return false;
            }
        },
        // session method takes session & user as default
        async session({ session, user }) {
            const guest = await getGuest(session.user.email);
            // Adding guestId to user in current session
            session.user.guestId = guest.id;
            return session;
        },
    },
    // Redirect user to our own login page instead of prebuilt google login
    pages: { signIn: "/login" },
};

// Sonrasında NextAuth fonksiyonumuzu çağırıp içerisini config objemizi veriyoruz
export const {
    auth,
    handlers: { GET, POST },
    signIn,
    signOut,
} = NextAuth(authConfig);
