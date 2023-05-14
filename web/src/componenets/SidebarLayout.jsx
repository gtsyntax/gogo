import { useState } from "react"
import { Link, Outlet } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function SidebarLayout({menuList}) {
    const [open, setOpen] = useState(true);
    return (
        <main className="grid grid-cols-12 min-h-screen min-w-full">
            <div className={`min-h-full flex flex-col justify-between items-center bg-brand-primary h-screen p-5 pt-8 duration-200 ${open ? "col-span-2" : "col-span-1"}`}>
                <div className="flex flex-col items-center">
                    <BsFillArrowLeftCircleFill 
                        className={`text-brand-white text-3xl cursor-pointer ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                    <ul className="mt-4">
                        {menuList.map((menu, key) => (
                            <Link to={menu.route} key={key}>
                                <li className="flex items-center space-x-4 text-brand-white cursor-pointer text-md hover:bg-brand-secondary p-4 rounded-md">
                                    <span>
                                        {menu.icon}
                                    </span>
                                    <span className={`font-medium text-base flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${open ? "col-span-10" : "col-span-11"}`}>
                <Outlet />
            </div>
        </main>
    )
}