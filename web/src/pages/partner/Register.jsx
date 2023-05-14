import { Link } from "react-router-dom"
import { TextInput, SelectInput } from "../../componenets/FormikUI"
import { Formik, Form } from "formik"
import * as Yup from "yup"

export default function PartnerRegister() {
    return (
        <main className="grid grid-cols-4 min-h-screen">
            <div className="bg-brand-primary col-span-1"></div>
            <div className="col-span-3 flex justify-center items-center">
                <div className="container w-[600px]">
                    <p className="text-brand-black text-2xl font-bold">Gogo Partner</p>
                    <p className="text-brand-black">0% commissions for up to 30 days</p>
                    <Formik
                        initialValues={{
                            storeAddress: "", 
                            storeName: "", 
                            brandName: "", 
                            businessType: "", 
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: ""
                        }}
                        validationSchema={Yup.object({
                            storeAddress: Yup.string().required("Required"),
                            storeName: Yup.string().required("Required"),
                            brandName: Yup.string().required("Required"),
                            businessType: Yup.string()
                                .oneOf(["restaurant", "grocery store", "liquor store", "retail", "other"], "Invalid Business Type")
                                .required("Required"),
                            firstName: Yup.string().required("Required"),
                            lastName: Yup.string().required("Required"),
                            email: Yup.string().email("Invalid email address").required("Required"),
                            phone: Yup.string().required("Required")
                        })}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        <Form className="space-y-4 flex flex-col mt-4 mb-4">
                            <TextInput label="Store address" name="storeAddress" type="text" />
                            <TextInput label="Store name" name="storeName" type="text" />
                            <TextInput label="Brand name" name="brandName" type="text" />
                            <SelectInput label="Business type" name="businessType">
                                <option value="">Select business type</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="grocery store">Grocery store</option>
                                <option value="liquor store">Liquor store</option>
                                <option value="retail">Retail</option>
                                <option value="other">Other</option>
                            </SelectInput>
                            <div className="grid grid-cols-2 space-x-4">
                                <TextInput label="First name" name="firstName" type="text" />
                                <TextInput label="Last name" name="lastName" type="text" />
                            </div>
                            <TextInput label="Email" name="email" type="email" />
                            <TextInput label="Mobile phone number" name="phone" type="tel" />
                            <button type="submit" className="bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3">Get Started</button>
                        </Form>
                    </Formik>
                    <p className="text-brand-black">Don't have an account? <Link to="/partner/login" className="hover:text-brand-secondary">Sign In</Link></p>
                </div>
            </div>
        </main>
    )
}