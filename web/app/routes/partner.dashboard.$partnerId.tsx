import { Outlet } from "@remix-run/react";

export default function PartnerDashboard() {
    return (
        <main>
            <h1>Partner Dashboard</h1>
            <Outlet />
        </main>
    )
}