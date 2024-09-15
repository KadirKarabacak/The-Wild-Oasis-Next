//! We must keep this comp as server comp, but also we need to use signIn func in onClick. So we need server actions

import Image from "next/image";
import { signInAction } from "../_lib/actions";

//! Server actions basically adding interactivity to Server Components. To do this we must use forms
function SignInButton() {
    return (
        <form action={signInAction}>
            <button className="flex items-center gap-6 max400:gap-3 text-lg border-2 rounded-md border-primary-300 px-10 py-4 font-medium max400:px-5">
                <Image
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="Google logo"
                    height="24"
                    width="24"
                />
                <span className="self-center pt-1 max400:text-[1rem]">
                    Continue with Google
                </span>
            </button>
        </form>
    );
}

export default SignInButton;
