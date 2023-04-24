import { ActionFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const partnerData = Object.fromEntries(formData);
    console.log(partnerData);
    return {ok: true}
}

export default function CourierRegister() {
    return (
        <main className="grid grid-cols-4 min-h-screen">
            <section className="col-span-1 bg-amber-400"></section>
            <section className="col-span-3 bg-white flex justify-center items-center">
            <div className="w-1/2 mt-8 mb-8">
                    <h1 className="text-3xl font-bold mb-8">Gogo Courier</h1>
                    <p className="text-xl font-bold">0% commissions for up to 30 days</p>
                    <p>Earn money on your own schedule with us</p>
                    <Form method="post" className="flex flex-col mt-4 mb-4">
                        <div className="flex gap-4">
                            <div className="basis-1/2 flex flex-col">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" className="border border-gray-300 py-1 px-2 mt-2 mb-4"/>
                            </div>

                            <div className="basis-1/2 flex flex-col">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" className="border border-gray-300 py-1 px-2 mt-2 mb-4"/>
                            </div>
                        </div>

                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" className="border border-gray-300 py-1 px-2 mt-2 mb-4"/>

                        <div className="flex gap-4">
                            <div className="basis-1/2 flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="border border-gray-300 py-1 px-2 mt-2 mb-4"/>
                            </div>

                            <div className="basis-1/2 flex flex-col">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" name="phone" className="border border-gray-300 py-1 px-2 mt-2 mb-4"/>
                            </div>
                        </div>

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="border border-gray-300 py-1 px-2 mt-2 mb-4"/>

                        <button type="submit" className="bg-amber-400 h-12">Get started</button>
                    </Form>
                    <p className="mt-4 mb-4">Already have an account? <Link to="/partner/login"><span className="text-teal-600">Gogo Partner Login</span></Link></p>
                </div>
            </section>
        </main>
    )
}