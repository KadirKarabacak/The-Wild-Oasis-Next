"use client";
import {
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "@/app/_components/SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
    {
        name: "Home",
        href: "/account",
        icon: <HomeIcon className="w-8 h-8 text-primary-300" />,
    },
    {
        name: "Reservations",
        href: "/account/reservations",
        icon: <CalendarDaysIcon className="w-8 h-8 text-primary-300" />,
    },
    {
        name: "Guest Profile",
        href: "/account/profile",
        icon: <UserIcon className="w-8 h-8 text-primary-300" />,
    },
];

function SideNavigation({ session }) {
    // Which tab is active ? Hooks works only in client components
    const pathname = usePathname();
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setIsOpenDrawer(prevState => !prevState);
    };

    return (
        <>
            <span className="max800:hidden block">
                <nav className="border-r border-primary-900">
                    <ul className="flex flex-col gap-2 h-full text-lg max1100:flex-row">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link
                                    className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                                        pathname === link.href
                                            ? "bg-primary-900"
                                            : ""
                                    }`}
                                    href={link.href}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}

                        <li>
                            <SignOutButton />
                        </li>
                    </ul>
                </nav>
            </span>
            <span className="min800:hidden block">
                <span className="flex gap-4 items-center p-2 max600:p-0 max600:gap-1">
                    <Hamburger
                        label="Profile Sidebar Drawer"
                        rounded
                        size={26}
                        color="white"
                        toggled={isOpenDrawer}
                        toggle={setIsOpenDrawer}
                    />
                    <label className="text-xl max600:mr-2">
                        Navigate in Guest Area
                    </label>
                    <img
                        className="object-cover h-8 rounded-md max400:hidden"
                        alt={session?.user?.name}
                        src={session?.user?.image}
                        // This prop is necessary to import images from google
                        referrerPolicy="no-referrer"
                    />
                </span>
                <Drawer
                    lockBackgroundScroll
                    open={isOpenDrawer}
                    onClose={toggleDrawer}
                    customIdSuffix="121212151548"
                    direction="right"
                    className="bottom-0 !bg-primary-800 !z-[99999]"
                >
                    <Logo
                        containerStyles="mt-4 justify-center flex-col pb-6 border-b border-primary-500"
                        height="120"
                        width="120"
                        onClick={toggleDrawer}
                    />
                    <nav className="border-r border-primary-900 mt-10">
                        <ul className="flex flex-col gap-2 h-full text-lg">
                            {navLinks.map(link => (
                                <li key={link.name} onClick={toggleDrawer}>
                                    <Link
                                        className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                                            pathname === link.href
                                                ? "bg-primary-900"
                                                : ""
                                        }`}
                                        href={link.href}
                                    >
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}

                            <li>
                                <SignOutButton />
                            </li>
                        </ul>
                    </nav>
                </Drawer>
            </span>

            {/* <nav className="border-r border-primary-900">
                <ul className="flex flex-col gap-2 h-full text-lg">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                                    pathname === link.href
                                        ? "bg-primary-900"
                                        : ""
                                }`}
                                href={link.href}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}

                    <li>
                        <SignOutButton />
                    </li>
                </ul>
            </nav> */}
        </>
    );
}

export default SideNavigation;
