import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = dateStr =>
    formatDistance(parseISO(dateStr), new Date(), {
        addSuffix: true,
    }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
    const {
        id,
        guestId,
        startDate,
        endDate,
        numNights,
        totalPrice,
        numGuests,
        status,
        created_at,
        cabins: { name, image },
    } = booking;

    return (
        <div className="flex border border-primary-800 max800:flex max800:flex-col">
            {/* Image of Reservated Cabin */}
            <div className="relative h-32 max800:h-96 aspect-square">
                <Image
                    src={image}
                    alt={`Cabin ${name}`}
                    className="object-cover border-r max800:border-r-0 border-primary-800"
                    fill
                    sizes=""
                />
            </div>

            {/* Information about Reservation */}
            <div className="flex-grow px-6 py-3 flex flex-col max600:gap-3 max600:px-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold max400:font-normal">
                        {numNights} nights in{" "}
                        <span className="max400:hidden"> Cabin </span>
                        {name}
                    </h3>
                    {isPast(new Date(startDate)) ? (
                        <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
                            past
                        </span>
                    ) : (
                        <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
                            upcoming
                        </span>
                    )}
                </div>
                <p className="text-lg text-primary-300">
                    {format(new Date(startDate), "EEE, MMM dd yyyy")} (
                    {isToday(new Date(startDate))
                        ? "Today"
                        : formatDistanceFromNow(startDate)}
                    ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
                </p>

                {/* Display on Large Screen */}
                <div className="flex gap-5 mt-auto items-baseline max600:hidden min600:flex">
                    <p className="text-xl font-semibold text-accent-400">
                        ${totalPrice}
                    </p>
                    <p className="text-primary-300">&bull;</p>
                    <p className="text-lg text-primary-300">
                        {numGuests} guest{numGuests > 1 && "s"}
                    </p>
                    <p className="ml-auto text-sm text-primary-400">
                        Booked{" "}
                        {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
                    </p>
                </div>

                {/* Display on Small Screen */}
                <div className="flex gap-5 mt-auto items-baseline max600:flex min600:hidden max600:flex-col">
                    <div className="flex gap-2">
                        <p className="text-xl font-semibold text-accent-400">
                            ${totalPrice}
                        </p>
                        <p className="text-primary-300">&bull;</p>
                        <p className="text-lg text-primary-300">
                            {numGuests} guest{numGuests > 1 && "s"}
                        </p>
                    </div>
                    <p className="ml-auto text-sm text-primary-400">
                        Booked{" "}
                        {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
                    </p>
                </div>
            </div>

            {/* Buttons for Edit & Delete Reservation */}
            <div className="flex flex-col border-l max800:border-t max800:flex-row border-primary-800 w-[100px] max800:w-full max800:h-12 max800:border-l-0">
                {!isPast(startDate) ? (
                    <>
                        <Link
                            href={`/account/reservations/edit/${id}`}
                            className="group flex max800:border-r items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900 max800:border-b-0 max800:justify-center"
                        >
                            <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
                            <span className="mt-1">Edit</span>
                        </Link>
                        <DeleteReservation bookingId={id} onDelete={onDelete} />
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default ReservationCard;
