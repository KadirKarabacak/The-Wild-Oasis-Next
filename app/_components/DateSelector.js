"use client";

// React day picker requires use client
import {
    differenceInDays,
    isPast,
    isSameDay,
    isWithinInterval,
} from "date-fns";
import { useEffect, useState } from "react";
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

    // Ekran genişliğini izlemek için state
    const [numberOfMonths, setNumberOfMonths] = useState(2);

    useEffect(() => {
        // Genişlik değiştiğinde numberOfMonths'u ayarla
        const handleResize = () => {
            if (window.innerWidth < 550) {
                setNumberOfMonths(1);
            } else {
                setNumberOfMonths(2);
            }
        };

        // İlk render ve her resize'da handleResize'i çağır
        handleResize();
        window.addEventListener("resize", handleResize);

        // Component unmount olduğunda event listener'ı kaldır
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col justify-between">
            <DayPicker
                className="pt-12 place-self-center pb-8"
                mode="range"
                min={minBookingLength + 1}
                max={maxBookingLength}
                onSelect={setRange}
                selected={displayRange}
                fromMonth={new Date()}
                fromDate={new Date()}
                toYear={new Date().getFullYear() + 5}
                captionLayout="dropdown"
                numberOfMonths={numberOfMonths}
                // Disable booking dates in situation today's past days & booked dates
                disabled={curDate =>
                    isPast(curDate) ||
                    bookedDates.some(date => isSameDay(date, curDate))
                }
            />

            <div className="flex items-center justify-between px-8 max600:px-2 bg-accent-500 text-primary-800 h-[72px]">
                <div className="flex items-baseline gap-6 max500:gap-1">
                    <p className="flex gap-2 items-baseline max400:hidden">
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
                            <span className="text-2xl max450:text-xl">
                                ${regularPrice}
                            </span>
                        )}
                        <span className="">/night</span>
                    </p>
                    {numNights ? (
                        <>
                            <p className="bg-accent-600 px-3 py-2 text-2xl max450:text-xl max450:px-1 max450:py-1 max400:hidden">
                                <span>&times;</span> <span>{numNights}</span>
                            </p>
                            <p>
                                <span className="text-lg font-bold uppercase">
                                    Total
                                </span>{" "}
                                <span className="text-2xl font-semibold max450:text-xl">
                                    ${cabinPrice}
                                </span>
                            </p>
                        </>
                    ) : null}
                </div>

                {range.from || range.to ? (
                    <button
                        className="border border-primary-800 py-2 px-4 text-sm font-semibold rounded-md uppercase max500:px-2"
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
