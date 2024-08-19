// This comp must be client cuz of we invoke server action directly in button click instead of using a form
"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
    // For delete reservation we can create server action right here.
    // function deleteReservation() {
    // To create a server action right here, we must use "use server" directive top of that function to be sure always this func stays on server
    //     "use server";
    // }

    const [isPending, startTransition] = useTransition();

    function handleDelete() {
        if (confirm("Are you sure you want to delete this reservation?"))
            // Wrapping our action with startTransition to mark it as transition
            startTransition(() => onDelete(bookingId));
    }

    return (
        <button
            disabled={isPending}
            onClick={handleDelete}
            className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
        >
            {!isPending ? (
                <>
                    <span className="mt-1">Delete</span>
                    <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
                </>
            ) : (
                <span className="mx-auto">
                    <SpinnerMini />
                </span>
            )}
        </button>
    );
}

export default DeleteReservation;
