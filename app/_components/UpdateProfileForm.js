"use client";
// This one is a client component trying to import a server component [ SelectCountry ]. Trying this makes us problems
import toast from "react-hot-toast";
import { updateGuest } from "../_lib/actions";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

//! Importing a server component inside client component causing the problem
// import SelectCountry from "./SelectCountry";

function UpdateProfileForm({ children, guest }) {
    const [isLoading, setIsLoading] = useState(false);
    const { fullName, email, nationality, nationalID, countryFlag } = guest;

    //! Works with Toasts on Success & Error
    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);

    //     // Sunucu aksiyonunu çağır
    //     setIsLoading(true);
    //     const result = await updateGuest(formData);
    //     setIsLoading(false);

    //     // Hatalıysa toast ile bildirim göster
    //     if (!result.success) {
    //         toast.error(result.message);
    //     } else {
    //         toast.success("Profile updated successfully!");
    //     }
    // };

    return (
        <form
            action={updateGuest}
            className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col max400:px-6"
        >
            <div className="space-y-2">
                <label>Full name</label>
                <input
                    name="fullName"
                    defaultValue={fullName}
                    disabled
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <label>Email address</label>
                <input
                    name="email"
                    defaultValue={email}
                    disabled
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="nationality">Where are you from?</label>
                    <img
                        src={countryFlag}
                        alt="Country flag"
                        className="h-5 rounded-sm"
                    />
                </div>
            </div>
            {children}
            <div className="space-y-2">
                <label htmlFor="nationalID">National ID number</label>
                <input
                    required
                    minLength={6}
                    maxLength={12}
                    placeholder="National ID must be min 6, max 12 chars"
                    defaultValue={nationalID}
                    name="nationalID"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton isLoading={isLoading}>
                    Update Profile
                </SubmitButton>
            </div>
        </form>
    );
}

export default UpdateProfileForm;
