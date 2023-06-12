import { useSelector, useDispatch } from "react-redux"
import { createMenu } from "../../slices/menu"
import { Formik, Form } from "formik"
import { TextInput } from "../../componenets/FormikUI"
import * as Yup from "yup"

export default function PartnerMenus() {
    const {restaurantMenuList} = useSelector((state) => state.menu)
    const dispatch = useDispatch()

    return (
        <main className="min-h-screen p-8 grid grid-cols-2 gap-x-8">
            <div className="border p-8 space-y-4">
                {restaurantMenuList.map((item) => (
                    <div className="border rounded p-4">
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
                ))}
            </div>
            <div className="border p-8">
                <Formik
                    initialValues = {{title: "", description: ""}}
                    validationSchema= {Yup.object({
                        title: Yup.string().min(10, "Must be 10 characters or more").required("Required"),
                        description: Yup.string().min(15, "Must be 15 characters or more").required("Required"),
                        price: Yup.number().min(1, "Must be greater than 1").required("Required"),
                        quantity: Yup.number().min(1, "Must be greater than 1").required("Required"),
                    })}
                    onSubmit={(values) => {
                        dispatch(createMenu(values))
                    }}
                >
                    <Form className="flex flex-col space-y-4">
                        <TextInput label="Menu Title" name="title" type="text"/>
                        <TextInput label="Menu Description" name="description" type="text"/>
                        <TextInput label="Menu Price" name="price" type="number" />
                        <TextInput label="Menu Quantity" name="quantity" type="number" />

                        <button type="submit" className="bg-brand-black text-brand-white rounded-full py-4 px-8">Create Menu</button>
                    </Form>
                </Formik>
            </div>
        </main>
    )
}

