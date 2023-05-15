import * as Yup from "yup"
import { useState } from "react"
import { Formik, Form } from "formik"
import { BsPlus } from "react-icons/bs"
import Modal from "../../componenets/Modal"
import { useDispatch, useSelector } from "react-redux"
import { addAddress, removeAddress } from "../../slices/address"
import { TextInput, SelectInput } from "../../componenets/FormikUI"

export default function CustomerAddress(){
    const [addressModal, setAddressModal] = useState(false)
    const { addressList, totalAddress } = useSelector((state) => state.address)
    const dispatch = useDispatch()

    return (
        <main className="p-8">
            <section className="flex justify-between items-center border rounded p-4">
                <h1 className="text-2xl">Address</h1>
                <button 
                    className="bg-brand-primary py-2 px-8 text-brand-white flex items-center"
                    onClick={() => setAddressModal(true)}
                >
                    <BsPlus size={20} />
                    <p>New Address</p>
                </button>
            </section>
            <section className="">
                {totalAddress === 0 ? (
                    <div className="h-44 flex justify-center items-center">
                        <h1 className="text-xl">Create an address</h1>
                    </div>
                ) : (
                    <div className="flex flex-col gap-y-8 mt-8">
                        {addressList.map((address, index) => (
                            <div key={address.id} className="border p-4">
                                <p className="text-lg uppercase"><span className="lowercase text-gray-400">Street name:</span> {address.street}</p>
                                <p className="text-lg uppercase"><span className="lowercase text-gray-400">Apartment:</span> {address.apartment}</p>
                                <p className="text-lg uppercase"><span className="lowercase text-gray-400">City:</span> {address.city}</p>
                                <p className="text-lg uppercase"><span className="lowercase text-gray-400">Postal code:</span> {address.postalCode}</p>
                                <button className="text-red-400" onClick={() => dispatch(removeAddress(address))}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <Modal title="New address" isVisible={addressModal} onClose={() => setAddressModal(false)}>
                <Formik
                    initialValues={{street: "", apartment: "", city: "", postalCode: ""}}
                    validationSchema={Yup.object({
                        street: Yup.string().required("Required"),
                        apartment: Yup.string().required("Required"),
                        city: Yup.string().oneOf(["istanbul", "ankara", "izmir", "antalya"], "Invalid address").required("Required"),
                        postalCode: Yup.string().required("Required")
                    })}
                    onSubmit={values => {
                        dispatch(addAddress(values))
                    }}
                >
                    <Form className="space-y-4">
                        <TextInput label="Street name" name="street" type="text"/>
                        <div className="grid grid-cols-2 gap-4">
                            <TextInput label="Apartment number" name="apartment" type="number"/>
                            <TextInput label="Postal code" name="postalCode" type="number"/>
                        </div>
                        <SelectInput label="City" name="city">
                                <option value="">Select city</option>
                                <option value="istanbul">Istanbul</option>
                                <option value="ankara">Ankara</option>
                                <option value="izmir">Izmir</option>
                                <option value="antalya">Antalya</option>
                        </SelectInput>
                        <button type="submit" className="bg-brand-primary text-brand-white p-4">Create address</button>
                    </Form>
                </Formik>
            </Modal>
        </main>
    )
}