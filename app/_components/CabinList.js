import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
// import { unstable_noStore as noStore } from "next/cache";

export default async function CabinList({ filter }) {
    // With this, Cabins page become dynamic again, cuz we are not caching component
    // noStore();
    const cabins = await getCabins();

    let displayedCabins;
    if (filter === "all") displayedCabins = cabins;
    if (filter === "small")
        displayedCabins = cabins.filter(cabin => cabin.maxCapacity <= 3);
    if (filter === "medium")
        displayedCabins = cabins.filter(
            cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
        );
    if (filter === "large")
        displayedCabins = cabins.filter(cabin => cabin.maxCapacity >= 8);

    if (!cabins?.length) return null;
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {displayedCabins?.map(cabin => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
}
