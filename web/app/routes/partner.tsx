import { Outlet } from "@remix-run/react";

export default function PartnerRoute() {
    return (
        <main>
            <h1>Parner Index</h1>
            <section>
                <Outlet />
            </section>
        </main>
    )
}