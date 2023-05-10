import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { BsCartFill, BsPlus } from "react-icons/bs"
import { BiMinus } from "react-icons/bi"

import { increaseQty, decreaseQty } from "../slices/product"

export default function StoreFront() {
    const params = useParams()
    const dispatch = useDispatch()
    const {productList} = useSelector((state) => state.product)
    const { amount } = useSelector((state) => state.cart)

    return (
        <main>
            <nav className="relative">
                <div className="bg-brand-primary h-11 fixed top-0 left-0 right-0">
                    <div className="container mx-auto flex justify-between items-center h-full">
                        <Link to="/" className="font-bold text-brand-yellow">gogo</Link>
                        <div className>
                            <Link to="#" className="flex gap-x-2 text-white text-sm font-semibold transition-all text-opacity-80 hover:text-opacity-100">
                                <BsCartFill size={20}/> 
                                Cart({amount})
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <section>
                <div className="container mx-auto">
                    <div>
                        <div className="border">
                            <img src="https://placehold.co/600x400?text=Shop+Image" />
                        </div>
                        <div className="p-4">
                            <h1 className="font-bold text-3xl">Panera</h1>
                            <p className="font-semibold">&#x2605; 4.7 (86 ratings) - Breakfast and Brunch - &#x20BA;&#x20BA;</p>
                            <p className="font-semibold">&#x20BA; 300 Min Delivery Fee</p>
                        </div>
                    </div>
                    <div className="border p-4 grid grid-cols-3 gap-8">
                        {productList.map((product, index) => (
                            <div key={index} className="shadow grid grid-cols-2 rounded-md p-4 space-x-4">
                                <img src={`https://placehold.co/600x400?text=Food+Image`} />
                                <div className="flex flex-col justify-evenly">
                                    <p className="text-sm">{product.name}</p>
                                    <div className="flex border rounded-lg justify-evenly items-center py-2">
                                        <BiMinus size={20} className="cursor-pointer" onClick={() => {dispatch(decreaseQty(product))}}/>
                                        <p>{product.qty}</p>
                                        <BsPlus size={20} className="cursor-pointer" onClick={() => {dispatch(increaseQty(product))}}/>
                                    </div>
                                    <p className="font-semibold">&#x20BA;{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}