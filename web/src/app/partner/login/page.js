"use client"
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'
import { getRequest, postRequest } from "@/api_service";
import { login } from '@/redux/features/auth-slice';

export default function CustomerLogin() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (event) => {
        event.preventDefault()
        const response = await postRequest("/auth/login", {username, password})
        dispatch(login(response.data))

        const existingShop = await getRequest(`/api/shops/owner/${response.data.id}`)
        //router.push(`/partner/${response.data.id}`)
        //router.push(`/partner/forms/new-store`)
    }

    return (
        <main className="min-h-screen flex justify-center items-center">
            <div className="border w-[600px] h-[800px] shadow p-8 rounded-2xl">
                <h1 className="font-bold text-4xl my-8">
                    <Link href="/">Gogo</Link>
                </h1>
                <div className="mb-8">
                    <h1 className="font-bold text-2xl">Login</h1>
                    <p className="font-light text-lg">Continue to Gogo</p>
                </div>
                <form className="flex flex-col gap-4 mb-4" onSubmit={handleLogin}>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="border py-4 px-8 rounded-full"/>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border py-4 px-8 rounded-full"/>

                    <button type="submit" className="bg-emerald-600 text-white text-xl font-bold p-4 rounded-full">Log in</button>
                </form>
                <p className="text-lg">New to Gogo? <Link href="/partner/register" className=" text-emerald-600">Get started</Link></p>
            </div>
        </main>
    )
}