import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
    return (
        <main className="mt-24">
            <Image
                src={bg}
                fill
                // Placeholder works only static imports keep in mind
                placeholder="blur"
                quality={80}
                className="object-cover object-top"
                alt="Mountains and forests with two cabins"
            />

            <div className="relative z-8 text-center">
                <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal max650:text-5xl">
                    Welcome to paradise.
                </h1>
                <Link
                    href="/cabins"
                    className="bg-accent-500 max650:px-4 max650:py-3 max650:text-sm px-8 py-6 rounded-sm text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
                >
                    Explore luxury cabins
                </Link>
            </div>
        </main>
    );
}
