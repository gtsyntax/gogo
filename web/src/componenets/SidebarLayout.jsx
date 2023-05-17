import { useState } from "react"
import { Link, Outlet } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function SidebarLayout({menuList}) {
    const [open, setOpen] = useState(false);
    return (
        <main className="grid grid-cols-12 min-h-screen min-w-full">
            <div className={`min-h-full flex flex-col border-r bg-brand-white h-screen duration-200 ${open ? "transition-all col-span-2" : "transition-all col-span-1"}`}>
                <div className="flex flex-col items-center w-full">
                    <div className="py-4">
                        <BsFillArrowLeftCircleFill 
                            className={`text-brand-black text-3xl cursor-pointer ${!open && "rotate-180"}`}
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <ul className="">
                        {menuList.map((menu, key) => (
                            <Link to={menu.route} key={key}>
                                <li className="flex my-4 h-10 px-4 items-center gap-4 text-brand-black hover:bg-brand-accent cursor-pointer text-md">
                                    <span>
                                        {menu.icon}
                                    </span>
                                    <span className={`font-medium transition-all text-base duration-200 ${!open && "hidden"}`}>{menu.title}</span>
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