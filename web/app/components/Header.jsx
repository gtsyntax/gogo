import { useState } from "react";
import { Form, Link } from "@remix-run/react";
import { CiGlobe } from "react-icons/ci";
import { HiUser, HiUserAdd } from "react-icons/hi";
import Modal from "./Modal";

export default function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    return (
        <main className="bg-brand-primary">
            <div className="container mx-auto h-11 flex items-center justify-between">
                <Link to="/" className="font-bold text-brand-yellow">gogo</Link>
                <nav className="flex gap-x-8">
                    <Link to="#" className="flex gap-x-2 text-white text-sm font-semibold transition-all text-opacity-80 hover:text-opacity-100">
                        <CiGlobe size={20}/>
                        English (EN)
                    </Link>
                    <Link 
                        to="#" 
                        className="flex gap-x-2 text-white text-sm font-semibold transition-all text-opacity-80 hover:text-opacity-100"
                        onClick={() => setShowLoginModal(true)}
                    >
                        <HiUser size={20}/>
                        Sign in
                    </Link>
                    <Link 
                        to="#" 
                        className="flex gap-x-2 text-white text-sm font-semibold transition-all text-opacity-80 hover:text-opacity-100"
                        onClick={() => setShowRegisterModal(true)}
                    >
                        <HiUserAdd size={20}/>
                        Sign up
                    </Link>
                </nav>
            </div>

            <Modal title="Sign In" isVisible={showLoginModal} onClose={() => setShowLoginModal(false)}>
                <Form method="POST" className="space-y-4 flex flex-col">
                    <input type="email" name="email" placeholder="Email" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                    <input type="password" name="password" placeholder="Password" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                    <button className="bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3">Sign In</button>
                </Form>
            </Modal>

            <Modal title="Sign Up" isVisible={showRegisterModal} onClose={() => setShowRegisterModal(false)}>
                <Form method="POST" className="space-y-4 flex flex-col">
                    <div className="grid grid-cols-2 space-x-4">
                        <input type="text" name="name" placeholder="Name" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                        <input type="text" name="surname" placeholder="Surname" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                    </div>
                    <input type="email" name="email" placeholder="Email" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                    <input type="password" name="password" placeholder="Password" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" required/>
                    <button className="bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3">Sign Up</button>
                </Form>
            </Modal>
        </main>
    )
}
