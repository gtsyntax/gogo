import { MdOutlineFavoriteBorder } from "react-icons/md";
import SidebarLayout from "../componenets/SidebarLayout";
import { RiFileList2Line, RiMapPinLine } from "react-icons/ri";
import { RxHome, RxStar, RxPerson, RxEnter } from "react-icons/rx";

export default function Customer() {
    const menuList = [
        {title: "Home", icon: <RxHome size={20}/>, route: "/customer"},
        {title: "Address", icon: <RiMapPinLine size={20}/>, route: "/customer/address"},
        {title: "Favorites", icon: <MdOutlineFavoriteBorder size={20}/>, route: "/customer/favorites"},
        {title: "Orders", icon: <RiFileList2Line size={20}/>, route: "/customer/orders"},
        {title: "Reviews", icon: <RxStar size={20}/>, route: "/customer/reviews"},
        {title: "Settings", icon: <RxPerson size={20}/>, route: "/customer/settings"},
        {title: "Logout", icon: <RxEnter size={20}/>}
    ]

    return (
        <SidebarLayout menuList={menuList} />
    )
}
