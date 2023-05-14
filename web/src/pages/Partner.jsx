
import { FiShoppingCart } from "react-icons/fi";
import SidebarLayout from "../componenets/SidebarLayout";
import { RiBarChartLine, RiFileList2Line } from "react-icons/ri";
import { RxDashboard, RxEnvelopeOpen, RxStar, RxPerson, RxEnter } from "react-icons/rx";

export default function Partner() {
    
    const menuList = [
        {title: "Dashboard", icon: <RxDashboard size={20}/>, route: "/partner"},
        {title: "Inbox", icon: <RxEnvelopeOpen size={20}/>, route: "/partner/inbox"},
        {title: "Orders", icon: <FiShoppingCart size={20}/>, route: "/partner/orders"},
        {title: "Menus", icon: <RiFileList2Line size={20}/>, route: "/partner/menus"},
        {title: "Reviews", icon: <RxStar size={20}/>, route: "/partner/reviews"},
        {title: "Analytics", icon: <RiBarChartLine size={20}/>, route: "/partner/analytics"},
        {title: "Settings", icon: <RxPerson size={20}/>, route: "/partner/settings"},
        {title: "Logout", icon: <RxEnter size={20}/>}
    ]

    return (
        <SidebarLayout menuList={menuList} />
    )
}
