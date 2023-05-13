import { Link } from "react-router-dom"

export default function PartnerRegister() {
    return (
        <main className="grid grid-cols-4 min-h-screen">
            <div className="bg-brand-primary col-span-1"></div>
            <div className="col-span-3 flex justify-center items-center">
                <div className="container w-[600px]">
                    <p className="text-brand-black text-2xl font-bold">Gogo Partner</p>
                    <p className="text-brand-black">0% commissions for up to 30 days</p>
                    <form className="space-y-4 flex flex-col mt-4 mb-4">
                        <div className="grid grid-cols-2 space-x-4">
                            <input type="text" name="name" placeholder="Name" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                            <input type="text" name="surname" placeholder="Surname" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                        </div>
                        <input type="text" name="restaurantName" placeholder="Restaurant name" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required />
                        <input type="email" name="email" placeholder="Email" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required />
                        <input type="tel" name="phone" placeholder="Phone number" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required />
                        <button className="bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3">Get Started</button>
                    </form>
                    <p className="text-brand-black">Don't have an account? <Link to="/partner/login" className="hover:text-brand-secondary">Sign In</Link></p>
                </div>
            </div>
        </main>
    )
}