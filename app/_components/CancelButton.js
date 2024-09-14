"use client";

import { useRouter } from "next/navigation";

export default function CancelButton({ children, buttonStyles, pathName }) {
    const router = useRouter();
    return (
        <button
            type="button"
            onClick={() => router.push(pathName)}
            className={`bg-accent-500 px-6 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 rounded-md disabled:text-gray-300 ${buttonStyles}`}
        >
            {children}
        </button>
    );
}
