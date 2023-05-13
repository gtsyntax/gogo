import { useSelector, useDispatch } from "react-redux"
import { createMenu } from "../../slices/menu"
import { Formik, Form, useField } from "formik"
import * as Yup from "yup"

export default function PartnerMenus() {
    const menu = useSelector((state) => state.menu)
    const dispatch = useDispatch()

    return (
        <main className="min-h-screen p-8 grid grid-cols-2 gap-x-8">
            <div className="border">left</div>
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
                    <Form className="space-y-4">
                        <TextInput label="Menu Title" name="title" type="text"/>
                        <TextInput label="Menu Description" name="description" type="text"/>
                        <TextInput label="Menu Price" name="price" type="number" />
                        <TextInput label="Menu Quantity" name="quantity" type="number" />

                        <button type="submit" className="bg-brand-primary text-brand-white py-2 px-4">Create Menu</button>
                    </Form>
                </Formik>
            </div>
        </main>
    )
}

function TextInput({label, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="border p-2" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-400">{meta.error}</div>
            ) : null}
        </div>
    )
}