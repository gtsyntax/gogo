import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { BsCartFill, BsPlus } from "react-icons/bs"
import { BiMinus } from "react-icons/bi"
import Header from "../componenets/Header"

export default function StoreFront() {

    return (
        <main>
            <Header />
            <StoreInfo />
            <MenuItemList />
        </main>
    )
}

function StoreInfo() {
    return (
        <div className="container mx-auto py-4 my-4">
            <h1 className="text-4xl font-bold">Baba Durum</h1>
            <div className="flex gap-2 text-gray-500">
                <p>Burgers, Sandwiches</p>
                <p>&#9733; 4.8 (203)</p>
                <p>100m</p>
                <p>&#8378;&#8378;</p>
            </div>
            <p className="text-gray-500">&#8378;30 minimum delivery fee</p>
        </div>
    )
}

function MenuItemList() {
    const menuList = useSelector((state) => state.menu.menuList)

    return (
        <div className="container mx-auto py-4 my-4">
            <h1 className="text-2xl font-bold">Menu</h1>
            <p className="text-gray-500">Choose from an array a delicious meals</p>
            <div className="py-4 my-4 grid grid-cols-2 gap-8">
                {menuList.map((menu, index) => <MenuItem menu={menu} key={index} />)}
            </div>
        </div>
    )
}

function MenuItem({menu: {name, price}}) {
    return (
        <div className="border h-36 p-4 flex flex-col justify-center rounded">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-500">&#8378;{price}</p>
        </div>
    )
}