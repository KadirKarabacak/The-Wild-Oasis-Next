"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
    // CHANGE
    const { range, resetRange } = useReservation();
    if (!range.from || !range.to) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-md bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900 flex gap-8 items-center max700:w-[60%] max500:w-[80%] max450:w-[95%]">
            <p className="w-full">
                👋 Don't forget to reserve your dates from{" "}
                {format(new Date(range.from), "MMM dd yyyy")} to{" "}
                {format(new Date(range.to), "MMM dd yyyy")}
            </p>
            <button
                onClick={resetRange}
                className="rounded-full p-1 hover:bg-accent-600 transition-all absolute top-1 right-1"
            >
                <XMarkIcon className="h-5 w-5" />
            </button>
        </div>
    );
}

export default ReservationReminder;
