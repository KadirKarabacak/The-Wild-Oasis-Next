"use client";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import {
    HomeModernIcon,
    InformationCircleIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import Logo from "./Logo";

export default function HamburgerComp({ session }) {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setIsOpenDrawer(prevState => !prevState);
    };
    return (
        <>
            <Hamburger
                label="Sidebar Drawer Controller"
                rounded
                size={26}
                toggled={isOpenDrawer}
                toggle={setIsOpenDrawer}
                color="white"
            />
            <Drawer
                lockBackgroundScroll
                open={isOpenDrawer}
                onClose={toggleDrawer}
                direction="left"
                customIdSuffix="78795464684"
                className="bottom-0 !bg-primary-800 !z-[99999]"
            >
                <span className="absolute left-0 top-0">
                    <Hamburger
                        label="Sidebar Drawer Controller"
                        rounded
                        size={20}
                        toggled={isOpenDrawer}
                        toggle={setIsOpenDrawer}
                        color="white"
                    />
                </span>

                <Logo
                    containerStyles="mt-4 justify-center flex-col pb-6 border-b border-primary-500"
                    // displayName={false}
                    height="120"
                    width="120"
                    onClick={toggleDrawer}
                />
                <ul className="flex flex-col gap-8 max650:gap-8 mt-10 px-6">
                    <li onClick={toggleDrawer}>
                        <Link
                            href="/cabins"
                            className="hover:text-accent-400 transition-colors flex gap-3 items-center"
                        >
                            <HomeModernIcon className="w-8 h-8  text-primary-300" />
                            Cabins
                        </Link>
                    </li>
                    <li onClick={toggleDrawer}>
                        <Link
                            href="/about"
                            className="hover:text-accent-400 transition-colors flex gap-3 items-center"
                        >
                            <InformationCircleIcon className="w-8 h-8 text-primary-300" />
                            About
                        </Link>
                    </li>
                    <li onClick={toggleDrawer}>
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
                                <span>Guest Area</span>
                            </Link>
                        ) : (
                            <Link
                                href="/account"
                                className="hover:text-accent-400 flex items-center gap-4 transition-colors"
                            >
                                <UserCircleIcon className="w-8 h-8 text-primary-300" />
                                <span>Guest Area</span>
                            </Link>
                        )}
                    </li>
                </ul>
            </Drawer>
        </>
    );
}
