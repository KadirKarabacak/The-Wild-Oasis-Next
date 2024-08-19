import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
    // With doin this we make our entire project dynamic because auth using cookies & headers.
    const session = await auth();
    return (
        <nav className="z-10 text-xl">
            <ul className="flex gap-16 items-center">
                <li>
                    <Link
                        href="/cabins"
                        className="hover:text-accent-400 transition-colors"
                    >
                        Cabins
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="hover:text-accent-400 transition-colors"
                    >
                        About
                    </Link>
                </li>
                <li>
                    {session?.user?.image ? (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 flex items-center gap-4 transition-colors"
                        >
                            <img
                                className="object-cover h-8 rounded-full"
                                alt={session.user.name}
                                src={session.user.image}
                                // This prop is necessary to import images from google
                                referrerPolicy="no-referrer"
                            />
                            <span>Guest area</span>
                        </Link>
                    ) : (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors"
                        >
                            Guest area
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}
