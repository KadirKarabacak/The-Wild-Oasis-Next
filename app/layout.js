import { Josefin_Sans } from "next/font/google";

// It returns a classname to use
const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap", // At the beginning display default, then display Josefin when downloaded
    fallback: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import { Toaster } from "react-hot-toast";

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
                <Toaster
                    position="bottom-left"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                        duration: 8000,
                        style: {
                            background: "#3C546C",
                            color: "#fff",
                            padding: "1rem 2rem",
                        },
                    }}
                />
                <Header />
                <div className="flex-1 max600:px-4 max800:py-6 px-8 py-12 grid:justify-center max450:px-2">
                    <main className="max-w-7xl mx-auto w-full">
                        <ReservationProvider>{children}</ReservationProvider>
                    </main>
                </div>
            </body>
        </html>
    );
}
