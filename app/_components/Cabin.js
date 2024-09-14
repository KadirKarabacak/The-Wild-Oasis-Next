import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import CancelButton from "./CancelButton";

function Cabin({ cabin }) {
    const { image, name, description, maxCapacity } = cabin;

    return (
        <div className="grid grid-cols-[3fr_4fr] max850:block max850:grid-cols-1 gap-20 border border-primary-800 py-3 px-10 mb-24 max950:mb-10 max950:px-0 max950:py-0 max950:gap-8 max600:gap-2">
            <div className="relative">
                <Image
                    src={image}
                    alt={`Cabin ${name}`}
                    fill
                    className="object-cover max850:!relative max450:!h-80"
                    quality={100}
                />
            </div>

            <div className="max850:px-8">
                <h3 className="text-accent-100 max600:text-4xl font-black text-7xl mb-5 bg-primary-950 p-6 pb-1 max600:pl-0 ">
                    Cabin {name}
                </h3>

                <p className="text-lg text-primary-300 mb-10">
                    <TextExpander>{description}</TextExpander>
                </p>

                <ul className="flex flex-col gap-4 mb-7">
                    <li className="flex gap-3 items-center">
                        <UsersIcon className="h-5 w-5 text-primary-600" />
                        <span className="text-lg">
                            For up to{" "}
                            <span className="font-bold">{maxCapacity}</span>{" "}
                            guests
                        </span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <MapPinIcon className="h-5 w-5 text-primary-600" />
                        <span className="text-lg">
                            Located in the heart of the{" "}
                            <span className="font-bold">Dolomites</span> (Italy)
                        </span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <EyeSlashIcon className="h-5 w-5 text-primary-600" />
                        <span className="text-lg">
                            Privacy <span className="font-bold">100%</span>{" "}
                            guaranteed
                        </span>
                    </li>
                    <CancelButton
                        pathName="/cabins"
                        buttonStyles="min600:self-start min600:px-16 min600:py-5"
                    >
                        Back to Cabins
                    </CancelButton>
                </ul>
            </div>
        </div>
    );
}

export default Cabin;
