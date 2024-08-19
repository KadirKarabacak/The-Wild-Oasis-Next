"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

function Filter() {
    // First get seachParams with useSearchParams
    const searchParams = useSearchParams();
    // Third, to actually set url with new params use useRouter
    const router = useRouter();
    // Take pathname to add start of the replaced url
    const pathname = usePathname();

    const activeFilter = searchParams.get("capacity") ?? "all";

    function handleFilter(filter) {
        // Then use searchParams and create new URLSeachParams and then set filter each time as params
        const params = new URLSearchParams(searchParams);
        params.set("capacity", filter);

        // Lastly replace url with new params, and spesify page to not scroll
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="border border-primary-800 flex">
            <Button
                filter="all"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                All Cabins
            </Button>

            <Button
                filter="small"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                1 &mdash; 3 guests
            </Button>
            <Button
                filter="medium"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                4 &mdash; 7 guests
            </Button>
            <Button
                filter="large"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                8 &mdash; 12 guests
            </Button>
        </div>
    );
}

function Button({ filter, handleFilter, activeFilter, children }) {
    return (
        <button
            className={`px-5 py-2 hover:bg-primary-700 ${
                filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
            }`}
            onClick={() => handleFilter(filter)}
        >
            {children}
        </button>
    );
}

export default Filter;
