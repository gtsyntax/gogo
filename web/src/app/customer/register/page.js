"use client"
import { postRequest } from "@/api_service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomerRegister() {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")

    const handleRegister = async (event) => {
        event.preventDefault()
        const payload = {username, email, password, firstName, lastName, phone, role:"customer"}
        const response = await postRequest("/auth/register", payload)
        console.log(response)
        router.push("/customer/login")
    }

    return (
        <main className="min-h-screen flex justify-center items-center">
            <div className="border w-[600px] h-[900px] shadow p-8 rounded-2xl">
                <h1 className="font-bold text-4xl my-8">
                    <Link href="/">Gogo</Link>
                </h1>
                <div className="mb-8">
                    <h1 className="font-bold text-2xl">Register</h1>
                    <p className="font-light text-lg">Get started with Gogo</p>
                </div>
                <form className="flex flex-col gap-4 mb-4" onSubmit={handleRegister}>
                    <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email" 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="text" 
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} 
                        placeholder="Name" 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="text" 
                        name="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} 
                        placeholder="Surname" 
                        className="border py-4 px-8 rounded-full"
                    />

                    <input 
                        type="tel" 
                        name="phone" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="Phone" 
                        className="border py-4 px-8 rounded-full"
                    />

                    <button type="submit" className="bg-emerald-600 text-white text-xl font-bold p-4 rounded-full">Register</button>
                </form>
                <p className="text-lg">Already have an account? <Link href="/customer/login" className=" text-emerald-600">Log in</Link></p>
            </div>
        </main>
    )
}