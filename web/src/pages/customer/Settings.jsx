import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextInput } from "../../componenets/FormikUI"
import { useSelector } from "react-redux"

export default function CustomerSettings(){
    //const { user } = useSelector(state => state.auth)

    return (
        <main className="p-8">
            <h1 className="mb-4 text-2xl font-semibold">Settings</h1>
            <hr/>
            <section className="mt-8">
                <Formik
                    initialValues={{firstName: "", lastName: "", username: "", email: "", phone: "", city: ""}}
                    validationSchema={Yup.object({
                        firstName: Yup.string().required("Required"),
                        lastName: Yup.string().required("Required"),
                        username: Yup.string().required("Required"),
                        email: Yup.string().email("Invalid email address").required("Required"),
                        phone: Yup.string().required("Required"),
                        city: Yup.string().required("Required"),
                    })}
                    onSubmit={values => {
                        console.log(values)
                    }}
                >
                    <Form className="shadow-md p-8 rounded-lg space-y-8">
                        <div className="grid grid-cols-2 gap-8">
                            <TextInput label="First Name" name="firstName" type="text" placeholder="Enter your First Name" />
                            <TextInput label="Last Name" name="lastName" type="text" placeholder="Enter your Last Name"/>
                            <TextInput label="Username" name="username" type="text" placeholder="Enter your Username"/>
                            <TextInput label="Email address" name="email" type="email" placeholder="Enter your Email address"/>
                        </div>
                        <TextInput label="Phone number" name="phone" type="tel" placeholder="Enter your phone number "/>
                        <button type="submit" className="bg-brand-black text-brand-white p-4 rounded-full">Save Changes</button>
                    </Form>
                </Formik>
            </section>
        </main>
    )
}