import { ActionFunction } from "@remix-run/node";
import { Link } from "react-router-dom";
import Login from "~/components/Login";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const partnerData = Object.fromEntries(formData);
    console.log(partnerData);
    return {ok: true}
}

export default function PartnerLogin() {
    return (
        <main className="grid grid-cols-4 min-h-screen">
            <section className="col-span-1 bg-amber-400"></section>
            <section className="col-span-3 bg-white flex justify-center items-center">
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold mb-8">Gogo Partner</h1>
                    <Login />
                    <Link to="#"><p className="text-teal-600 mt-4 mb-4">Forgot your password?</p></Link>
                    <hr/>
                    <p className="mt-4 mb-4">No account? <Link to="/partner/register"><span className="text-teal-600">Partner with Gogo</span></Link></p>
                </div>
            </section>
        </main>
    )
}