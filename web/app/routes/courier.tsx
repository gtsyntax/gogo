import { Outlet } from "@remix-run/react";

export default function CourierRoute() {
    return (
        <main>
            <h1>Courier main</h1>
            <section>
                <Outlet />
            </section>
        </main>
    )
}