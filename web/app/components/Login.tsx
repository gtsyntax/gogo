import { Form } from "@remix-run/react";

export default function Login() {
    return (
        <Form method="post" className="flex flex-col mt-8 mb-8">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="border border-gray-300 py-1 px-2 mt-2 mb-4" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="border border-gray-300 py-1 px-2 mt-2 mb-4" />

            <button type="submit" className="bg-amber-400 h-12 font-bold">Log In</button>
        </Form>
    )
}