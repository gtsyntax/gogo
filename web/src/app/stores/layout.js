"use client"

import Navbar from "@/componenets/Navbar"


export default function StoreLayout({children}) {
    
    return (
        <section>
            <Navbar />
            {children}
        </section>
    )
}