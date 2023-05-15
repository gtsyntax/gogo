import { useSelector, useDispatch } from "react-redux"
import { BiMinus } from "react-icons/bi"
import { BsPlus } from "react-icons/bs"
import Modal from "../../componenets/Modal"
import { increaseQuatity, decreaseQuatity, removeItem } from "../../slices/cart"
import { useState } from "react"

export default function CustomerCart(){
    const [checkoutModal, setCheckoutModal] = useState(false)
    const {cartItems, total, quantity} = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    return (
        <main className="p-8">
            <h1 className="mb-4 text-2xl">Cart</h1>
            <hr/>
            <section className="grid grid-cols-4 gap-8 divide-x">
                {quantity === 0 ? (
                    <div className="col-span-3 flex justify-center items-center text-xl">
                        <p>Your cart is empty</p>
                    </div>
                ) 
                : (
                    <div className="col-span-3 flex flex-col gap-y-4 mt-4">
                        {cartItems.map((item, index) => (
                            <div className="flex justify-between items-center" key={item.itemId}>
                                <div>
                                    <p>{item.itemName}</p>
                                    <p>&#8378;{item.price}</p>
                                    <button className="text-red-400" onClick={() => dispatch(removeItem(item))}>Remove</button>
                                </div>
                                <div className="flex items-center w-32 justify-between">
                                    <button onClick={() => {
                                        if (item.quantity === 1) {
                                            dispatch(removeItem(item))
                                            return
                                        }
                                        dispatch(decreaseQuatity(item))
                                    }}>
                                        <BiMinus size={20}/>
                                    </button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => dispatch(increaseQuatity(item))}><BsPlus size={20}/></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="col-span-1 flex flex-col gap-y-2 p-4">
                    <p>Address:</p>
                    <p>Total: &#8378;{total.toFixed(2)}</p>
                    <button className="bg-brand-primary text-brand-white p-2" onClick={() => setCheckoutModal(true)}>Checkout</button>
                </div>
            </section>
            <Modal title="Checkout" isVisible={checkoutModal} onClose={() => setCheckoutModal(false)}>
            </Modal>
        </main>
    )
}