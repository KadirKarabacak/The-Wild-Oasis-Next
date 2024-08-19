"use client";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function SubmitButton({ children, actionText = "Updating..." }) {
    // Pending status holds form's current situation
    const { pending, formData, action } = useFormStatus();

    return (
        <button
            disabled={pending}
            className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        >
            {pending ? (
                <div className="flex gap-2">
                    <span>
                        <SpinnerMini />
                    </span>
                    {actionText}
                </div>
            ) : (
                children
            )}
        </button>
    );
}

export default SubmitButton;
