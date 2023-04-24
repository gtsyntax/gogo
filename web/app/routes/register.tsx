import { ActionFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const partnerData = Object.fromEntries(formData);
    console.log(partnerData);
    return {ok: true}
}

export default function Register() {
    return (
        <main className="grid h-screen grid-cols-4">
            <div className="col-span-1 bg-amber-400"></div>
            <div className="col-span-3">
                <div className="min-h-screen flex justify-center items-center">
                    <div className="container w-1/2">
                        <h1 className="text-4xl font-bold">Register</h1>
                        <p className="text-lg">Create your account.</p>
                        <Form method="post">
                            <div className="grid grid-cols-2 gap-5">
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    placeholder="First Name" 
                                    className="border border-gray-300 py-1 px-2"
                                />
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    placeholder="Last Name" 
                                    className="border border-gray-300 py-1 px-2"
                                />
                            </div>
                            <input 
                                    type="text" 
                                    name="address" 
                                    placeholder="Address" 
                                    className="border border-gray-300 py-1 px-2 w-full mt-2"
                            />
                            <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    className="border border-gray-300 py-1 px-2 w-full mt-2"
                            />
                            <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone" 
                                    className="border border-gray-300 py-1 px-2 w-full mt-2"
                            />
                            <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    className="border border-gray-300 py-1 px-2 w-full mt-2"
                            />
                            <button type="submit" className="bg-amber-400 mt-2 py-2 px-4 w-full">Create Account</button>
                        </Form>
                        <p className="mt-2">Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}