import { Outlet } from "@remix-run/react";
import SecondaryNav from "~/components/SecondaryNav";

export default function StoresRoute() {
    return (
        <div>
            <SecondaryNav />
            <main>
                <Outlet />
            </main>
        </div>
    )
}