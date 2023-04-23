import { ActionFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ email, password });
    return { ok: true}
}

export default function Login() {
    return (
        <main className="grid h-screen grid-cols-3">
            <div className="col-span-1 bg-amber-400"></div>
            <div className="col-span-2">
            <div className="min-h-screen flex justify-center items-center">
                    <div className="container w-1/2">
                        <h1 className="text-4xl font-bold">Login</h1>
                        <p className="text-lg">Continue where you left off.</p>
                        <Form method="post">
                            <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    className="border border-gray-300 py-1 px-2 w-full mt-2"
                            />
                            <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    className="border border-gray-300 py-1 px-2 w-full mt-2"
                            />
                            <button type="submit" className="bg-amber-400 mt-2 py-2 px-4 w-full">Login</button>
                        </Form>
                        <p className="mt-2">Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}