import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Josefin_Sans } from "next/font/google";

// It returns a classname to use
const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap", // At the beginning display default, then display Josefin when downloaded
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

// Page title witch shown on new browser tab
export const metadata = {
    // title: "The Wild Oasis",
    title: {
        template: "The Wild Oasis | %s", // %s is the dynamic title comes from each page metadata
        default: "Welcome | The Wild Oasis", // default title if there is no metadata
    },
    description:
        "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${josefin.className} bg-primary-950 antialiased relative text-primary-100 min-h-screen flex flex-col`}
            >
                <Header />
                <div className="flex-1 px-8 py-12 grid">
                    <main className="max-w-7xl mx-auto w-full">
                        <ReservationProvider>{children}</ReservationProvider>
                    </main>
                </div>
            </body>
        </html>
    );
}
