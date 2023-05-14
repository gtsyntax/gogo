import { Link } from "react-router-dom"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextInput } from "../../componenets/FormikUI"

export default function PartnerLogin() {
    return (
        <main className="bg-brand-white min-h-screen flex justify-center items-center">
            <div className="container w-[600px]">
                <p className="text-2xl text-center text-black font-bold">Login</p>
                <Formik 
                    initialValues={{email: "", password: ""}}
                    validationSchema={Yup.object({
                        email: Yup.string().email("Invalid email address").required("Required"),
                        password: Yup.string().min(8, "Password should be 8 characters or more").required("Required")
                    })}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    <Form className="flex flex-col space-y-2 mt-4 mb-4">
                        <TextInput label="Email address" name="email" type="email" />
                        <TextInput label="Password" name="password" type="password" />
                        <button type="submit" className="bg-brand-primary text-brand-white h-12 hover:text-brand-yellow hover:bg-brand-secondary transition-colors">Sign In</button>
                    </Form>
                </Formik>
                <p className="text-black">Don't have an account? <Link to="/partner/register" className="hover:text-brand-primary">Sign Up</Link></p>
            </div>
        </main>
    )
}