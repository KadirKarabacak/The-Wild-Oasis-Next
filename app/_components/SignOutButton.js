import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

//! Here SideNavigation is a Client component. So Signout is a client component too. Server actions also can work in client components
function SignOutButton() {
    return (
        <form action={signOutAction}>
            <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
                <ArrowRightOnRectangleIcon className="w-8 h-8 text-primary-300" />
                <span>Sign out</span>
            </button>
        </form>
    );
}

export default SignOutButton;
