import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { name } = await getCabin(params.cabinId);
    return {
        title: `Cabin ${name}`,
    };
}

// Getting all possible dynamic segments, and saying NextJS you can export it as static page
export async function generateStaticParams() {
    const cabins = await getCabins();
    const ids = cabins.map(cabin => ({ cabinId: String(cabin.id) }));

    return ids;
}

export default async function Page({ params }) {
    //! It was a problem, blocking waterfall awaiting after and after.
    //! Another & better solution is just abstract promises into their own components and import them
    const cabin = await getCabin(params?.cabinId);
    // const settings = await getSettings();
    // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

    return (
        <div className="max-w-6xl mx-auto mt-8 max950:mt-2">
            <Cabin cabin={cabin} />
            <div>
                <h2 className="mb-10 text-accent-400 text-5xl font-semibold text-center max800:text-3xl">
                    Reserve today. Pay on arrival.
                </h2>
            </div>
            {/* With this, other data fetch requests doesnt block entire ui but the piece of it */}
            <Suspense fallback={<Spinner />}>
                <Reservation cabin={cabin} />
            </Suspense>
        </div>
    );
}
