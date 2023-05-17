import { Formik, Form } from "formik"
import * as Yup from "yup"
import { SelectInput, TextInput } from "../../componenets/FormikUI"
import { useSelector } from "react-redux"

export default function PartnerSettings() {
    //const { user } = useSelector(state => state.auth)
    return (
        <main className="p-8">
            <h1 className="mb-4 text-2xl font-semibold">Settings</h1>
            <hr/>
            <section className="mt-8">
                <Formik
                    initialValues={
                        {
                            storeAddress: "",
                            storeName: "",
                            brandName: "",
                            businessType: "",
                            firstName: "", 
                            lastName: "", 
                            username: "", 
                            email: "", 
                            phone: "", 
                            city: ""
                        }
                    }
                    validationSchema={Yup.object({
                        storeAddress: Yup.string().required("Required"),
                        storeName: Yup.string().required("Required"),
                        brandName: Yup.string().required("Required"),
                        businessType: Yup.string().oneOf(["restaurant","grocery_store", "liqour_store", "retail", "pet_store"]).required("Required"),
                        firstName: Yup.string().required("Required"),
                        lastName: Yup.string().required("Required"),
                        username: Yup.string().required("Required"),
                        email: Yup.string().email("Invalid email address").required("Required"),
                        phone: Yup.string().required("Required"),
                        city: Yup.string().oneOf(["istanbul", "antalya", "izmir"]).required("Required"),
                    })}
                    onSubmit={values => {
                        console.log(values)
                    }}
                >
                    <Form className="shadow-md p-8 rounded-lg space-y-8">
                        <TextInput label="Store address" name="storeAddress" type="text" />
                        <div className="grid grid-cols-2 gap-8">
                            <TextInput label="Store name" name="storeName" type="text" />
                            <TextInput label="Brand name" name="brandName" type="text" />
                        </div>
                        <SelectInput label="Business type" name="businessType">
                                <option value="">Select business type</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="grocery_store">Grocery store</option>
                                <option value="liquor_store">Liquor store</option>
                                <option value="retail">Retail</option>
                                <option value="pet_store">Pet store</option>
                        </SelectInput>
                        <div className="grid grid-cols-2 gap-8">
                            <TextInput label="First Name" name="firstName" type="text" />
                            <TextInput label="Last Name" name="lastName" type="text" />
                            <TextInput label="Username" name="username" type="text" />
                            <TextInput label="Email address" name="email" type="email" />
                        </div>
                        <TextInput label="Phone number" name="phone" type="tel" />
                        <SelectInput label="City" name="city">
                                <option value="">Select city</option>
                                <option value="istanbul">Istanbul</option>
                                <option value="antalya">Antalya</option>
                                <option value="izmir">Izmir</option>
                        </SelectInput>
                        <button type="submit" className="bg-brand-black text-brand-white p-4 rounded-full">Save Changes</button>
                    </Form>
                </Formik>
            </section>
        </main>
    )
}