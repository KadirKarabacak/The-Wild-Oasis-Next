"use client";
import React from "react";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";
import { deleteBooking } from "../_lib/actions";

function ReservationList({ bookings }) {
    // useOptimistic takes two paramaters, first is rendered data, second is updater function
    const [optimisticBookings, optimisticDelete] = useOptimistic(
        bookings,
        (curBookings, bookingId) => {
            // Return is important
            return curBookings.filter(booking => booking.id !== bookingId);
        }
    );

    // Lifted up handleDelete function to include optimisticDelete inside it
    async function handleDelete(bookingId) {
        optimisticDelete(bookingId);
        await deleteBooking(bookingId);
    }

    return (
        <ul className="space-y-6">
            {optimisticBookings.map(booking => (
                <ReservationCard
                    booking={booking}
                    key={booking.id}
                    onDelete={handleDelete}
                />
            ))}
        </ul>
    );
}

export default ReservationList;
