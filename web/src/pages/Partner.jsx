import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { RxDashboard, RxEnvelopeOpen, RxStar, RxPerson, RxEnter } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { RiBarChartLine, RiFileList2Line } from "react-icons/ri";

export default function Partner() {
    const [open, setOpen] = useState(true);
    const Menus = [
        {title: "Dashboard", icon: <RxDashboard size={20}/>, route: "/partner"},
        {title: "Inbox", icon: <RxEnvelopeOpen size={20}/>, route: "/partner/inbox"},
        {title: "Orders", icon: <FiShoppingCart size={20}/>, route: "/partner/orders"},
        {title: "Menus", icon: <RiFileList2Line size={20}/>, route: "/partner/menus"},
        {title: "Reviews", icon: <RxStar size={20}/>, route: "/partner/reviews"},
        {title: "Analytics", icon: <RiBarChartLine size={20}/>, route: "/partner/analytics"},
        {title: "Settings", icon: <RxPerson size={20}/>, route: "/partner/settings"},
    ]

    return (
        <main className="grid grid-cols-12 min-h-screen min-w-full">
            <div className={`flex flex-col justify-between items-center bg-brand-primary h-screen p-5 pt-8 duration-200 ${open ? "col-span-2" : "col-span-1"}`}>
                <div className="flex flex-col items-center">
                    <BsFillArrowLeftCircleFill 
                        className={`text-brand-white text-3xl cursor-pointer ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                    <ul className="mt-4">
                        {Menus.map((menu, key) => (
                            <NavLink to={menu.route} key={key}>
                                <li className="flex items-center space-x-4 text-brand-white cursor-pointer text-md hover:bg-brand-secondary p-4 rounded-md">
                                    <span>
                                        {menu.icon}
                                    </span>
                                    <span className={`font-medium text-base flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center space-x-4 text-brand-white cursor-pointer text-md hover:bg-brand-secondary p-4 rounded-md">
                    <RxEnter size={20}/>
                    <p className={`font-medium text-base flex-1 duration-200 ${!open && "hidden"}`}>Logout</p>
                </div>
            </div>
            <div className={`${open ? "col-span-10" : "col-span-11"}`}>
                <Outlet />
            </div>
        </main>
    )
}
