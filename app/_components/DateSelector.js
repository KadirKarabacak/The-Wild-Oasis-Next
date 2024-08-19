"use client";

// React day picker requires use client
import {
    differenceInDays,
    isPast,
    isSameDay,
    isWithinInterval,
} from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
    return (
        range.from &&
        range.to &&
        datesArr.some(date =>
            isWithinInterval(date, { start: range.from, end: range.to })
        )
    );
}

function DateSelector({ settings, bookedDates, cabin }) {
    const { range, setRange, resetRange } = useReservation();

    const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

    const numNights = differenceInDays(displayRange.to, displayRange.from);
    const { minBookingLength, maxBookingLength } = settings;
    const { discount, regularPrice } = cabin;
    const cabinPrice = numNights * (regularPrice - discount);

    return (
        <div className="flex flex-col justify-between">
            <DayPicker
                className="pt-12 place-self-center"
                mode="range"
                min={minBookingLength + 1}
                max={maxBookingLength}
                onSelect={setRange}
                selected={displayRange}
                fromMonth={new Date()}
                fromDate={new Date()}
                toYear={new Date().getFullYear() + 5}
                captionLayout="dropdown"
                numberOfMonths={2}
                // Disable booking dates in situation today's past days & booked dates
                disabled={curDate =>
                    isPast(curDate) ||
                    bookedDates.some(date => isSameDay(date, curDate))
                }
            />

            <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
                <div className="flex items-baseline gap-6">
                    <p className="flex gap-2 items-baseline">
                        {discount > 0 ? (
                            <>
                                <span className="text-2xl">
                                    ${regularPrice - discount}
                                </span>
                                <span className="line-through font-semibold text-primary-700">
                                    ${regularPrice}
                                </span>
                            </>
                        ) : (
                            <span className="text-2xl">${regularPrice}</span>
                        )}
                        <span className="">/night</span>
                    </p>
                    {numNights ? (
                        <>
                            <p className="bg-accent-600 px-3 py-2 text-2xl">
                                <span>&times;</span> <span>{numNights}</span>
                            </p>
                            <p>
                                <span className="text-lg font-bold uppercase">
                                    Total
                                </span>{" "}
                                <span className="text-2xl font-semibold">
                                    ${cabinPrice}
                                </span>
                            </p>
                        </>
                    ) : null}
                </div>

                {range.from || range.to ? (
                    <button
                        className="border border-primary-800 py-2 px-4 text-sm font-semibold"
                        onClick={resetRange}
                    >
                        Clear
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default DateSelector;
