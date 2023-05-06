import { Form, Link } from "@remix-run/react";

export const meta = () => {
    return [{ title: "Partner Login - Gogo" }];
};

export default function partnerLogin() {
  return (
    <main className="bg-brand-primary min-h-screen flex justify-center items-center">
        <div className="container w-[600px]">
            <p className="text-2xl text-center text-white font-bold">Login</p>
            <Form method="POST" className="flex flex-col space-y-2 mt-4 mb-4">
                <input 
                    type="email" 
                    name="password" 
                    placeholder="Email address" 
                    className="outline-none p-2 h-12 hover:border-brand-primary focus:border-brand-primary"
                    required
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="outline-none p-2 h-12 hover:border-brand-primary focus:border-brand-primary"
                    required
                />
                <button className="bg-brand-yellow text-brand-primary h-12 hover:text-brand-yellow hover:bg-brand-secondary transition-colors">Sign In</button>
            </Form>
            <p className="text-white">Don't have an account? <Link to="/partner/register" className="hover:text-brand-yellow">Sign Up</Link></p>
        </div>
    </main>
  )
}
