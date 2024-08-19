import Spinner from "../_components/Spinner";

// This loading file blocks whole cabins route while fetching data. For more spesific loader use Suspense
export default function Loading() {
    return (
        <div className="grid items-center justify-center">
            <Spinner />
            <p className="text-xl text-primary-200">Loading cabin data...</p>
        </div>
    );
}
