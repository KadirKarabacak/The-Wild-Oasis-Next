import Link from "next/link";
import "react-modern-drawer/dist/index.css";
import { auth } from "../_lib/auth";
import HamburgerComp from "./HamburgerComp";

// const StyledDrawerContainer = styled.span`
//     display: none;
//     @media (max-width: 1000px) {
//         display: block;
//     }
// `;

// const StyledHeaderContainer = styled.span`
//     display: grid;
//     grid-row: 1 / -1;
//     @media (max-width: 1000px) {
//         display: none;
//     }
// `;

export default async function Navigation() {
    // With doin this we make our entire project dynamic because auth using cookies & headers.
    const session = await auth();
    return (
        <nav className="z-10 text-xl">
            <span className="max600:block min600:hidden">
                <HamburgerComp session={session} />
            </span>
            <span className="min600:block max600:hidden">
                <ul className="flex gap-16 items-center max700:gap-8">
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
            </span>
        </nav>
    );
}
