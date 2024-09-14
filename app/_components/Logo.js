import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo({
    containerStyles,
    displayName = true,
    height = "60",
    width = "60",
    onClick,
}) {
    return (
        <Link
            onClick={onClick}
            href="/"
            className={`flex items-center gap-4 z-10 ${containerStyles}`}
        >
            <Image
                src={logo}
                height={height}
                width={width}
                quality={100}
                alt="The Wild Oasis logo"
            />
            {displayName && (
                <span className="text-xl font-semibold text-primary-100">
                    The Wild Oasis
                </span>
            )}
        </Link>
    );
}

export default Logo;
