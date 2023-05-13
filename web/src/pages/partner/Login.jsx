import { Link } from "react-router-dom"

export default function PartnerLogin() {
    return (
        <main className="bg-brand-white min-h-screen flex justify-center items-center">
            <div className="container w-[600px]">
                <p className="text-2xl text-center text-black font-bold">Login</p>
                <form className="flex flex-col space-y-2 mt-4 mb-4">
                    <input 
                        type="email" 
                        name="password" 
                        placeholder="Email address" 
                        className="p-2 h-12 border"
                        required
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="p-2 h-12 border"
                        required
                    />
                    <button className="bg-brand-primary text-brand-white h-12 hover:text-brand-yellow hover:bg-brand-secondary transition-colors">Sign In</button>
                </form>
                <p className="text-black">Don't have an account? <Link to="/partner/register" className="hover:text-brand-primary">Sign Up</Link></p>
            </div>
        </main>
    )
}