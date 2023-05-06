import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { RxHome, RxStar, RxPerson, RxEnter } from "react-icons/rx";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiFileList2Line, RiMapPinLine } from "react-icons/ri";
import { Outlet, Link } from "@remix-run/react";

export default function customer() {
    const [open, setOpen] = useState(true);
    const Menus = [
        {title: "Home", icon: <RxHome size={20}/>, route: "/customer"},
        {title: "Address", icon: <RiMapPinLine size={20}/>, route: "/customer/address"},
        {title: "Favorites", icon: <MdOutlineFavoriteBorder size={20}/>, route: "/customer/favorites"},
        {title: "Orders", icon: <RiFileList2Line size={20}/>, route: "/customer/orders"},
        {title: "Reviews", icon: <RxStar size={20}/>, route: "/customer/reviews"},
        {title: "Settings", icon: <RxPerson size={20}/>, route: "/customer/settings"},
    ]

    return (
        <main className="flex">
            <div className={`flex flex-col justify-between items-center bg-brand-primary h-screen p-5 pt-8 duration-200 ${open ? "w-72" : "w-20"}`}>
                <div className="flex flex-col items-center">
                    <BsFillArrowLeftCircleFill 
                        className={`text-white text-3xl cursor-pointer ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                    <ul className="mt-4">
                        {Menus.map((menu, key) => (
                            <Link to={menu.route}>
                            <li key={key} className="flex items-center space-x-4 text-gray-300 cursor-pointer text-md hover:bg-brand-secondary p-4 rounded-md">
                                <span>
                                    {menu.icon}
                                </span>
                                <span className={`font-medium text-base flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                            </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 cursor-pointer text-md hover:bg-brand-secondary p-4 rounded-md">
                    <RxEnter size={20}/>
                    <p className={`font-medium text-base flex-1 duration-200 ${!open && "hidden"}`}>Logout</p>
                </div>
            </div>
            <div className="p-8"><Outlet /></div>
        </main>
    )
}
