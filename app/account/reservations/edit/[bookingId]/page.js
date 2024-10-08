import CancelButton from "@/app/_components/CancelButton";
import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
// import { useFormStatus } from "react-dom";

export default async function Page({ params }) {
    const { bookingId } = params;
    const { cabinId, numGuests, observations } = await getBooking(bookingId);
    const { maxCapacity } = await getCabin(cabinId);

    return (
        <div className="max500:mt-6">
            <h2 className="font-semibold text-2xl text-accent-400 mb-7">
                Edit Reservation #{bookingId}
            </h2>

            <form
                method="POST"
                action={updateBooking}
                className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col max500:px-3 max500:py-4 max400:px-6"
            >
                {/* A trick to send bookingId into the server action formData */}
                <input type="hidden" name="bookingId" value={bookingId} />
                <div className="space-y-2">
                    <label htmlFor="numGuests">How many guests?</label>
                    <select
                        name="numGuests"
                        id="numGuests"
                        defaultValue={numGuests}
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm max400:px-2"
                        required
                    >
                        <option value="" key="">
                            Select number of guests...
                        </option>
                        {Array.from(
                            { length: maxCapacity },
                            (_, i) => i + 1
                        ).map(x => (
                            <option value={x} key={x}>
                                {x} {x === 1 ? "guest" : "guests"}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="observations">
                        Anything we should know about your stay?
                    </label>
                    <textarea
                        defaultValue={observations}
                        name="observations"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    />
                </div>

                <div className="flex justify-end items-center gap-6 max500:gap-2">
                    <SubmitButton>
                        Update{" "}
                        <span className="max400:hidden">Reservation</span>
                    </SubmitButton>
                    <CancelButton
                        pathName="/account/reservations"
                        buttonStyles="min600:self-center"
                    >
                        Cancel
                    </CancelButton>
                </div>
            </form>
        </div>
    );
}
