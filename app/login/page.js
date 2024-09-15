import SignInButton from "../_components/SignInButton";

export const metadata = {
    title: "Login",
};

export default function Page() {
    return (
        <div className="flex flex-col gap-10 mt-10 items-center">
            <h2 className="text-3xl font-semibold max500:text-2xl max400:text-[1.2rem]">
                Sign in to access your{" "}
                <span className="text-accent-400">Guest Area</span>
            </h2>
            <SignInButton />
        </div>
    );
}
