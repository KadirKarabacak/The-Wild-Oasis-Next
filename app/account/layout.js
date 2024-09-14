import SideNavigation from "@/app/_components/SideNavigation";
import { auth } from "../_lib/auth";

export default async function Layout({ children }) {
    const session = await auth();

    return (
        <div className="grid grid-cols-[16rem_1fr] max1100:grid-cols-1 h-full gap-12 max800:gap-2">
            <SideNavigation session={session} />
            <div className="py-1">{children}</div>
        </div>
    );
}
