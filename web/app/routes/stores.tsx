import { Outlet } from "@remix-run/react";
import SecondaryNav from "~/components/SecondaryNav";

export default function StoresRoute() {
    return (
        <main>
            <SecondaryNav />
            <section>
                <Outlet />
            </section>
        </main>
    )
}