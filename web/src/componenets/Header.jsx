import axios from "axios";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextInput } from "./FormikUI";
import { CiGlobe } from "react-icons/ci";
import { useState, useEffect } from "react";
import { HiUser, HiUserAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";

import { login, register } from "../slices/auth"
import { clearMessage } from "../slices/message"
import Modal from "./Modal";

export default function Header() {
    const navigate = useNavigate()

    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)

    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false)

    const { isLoggedIn } = useSelector((state) => state.auth)
    const { message } = useSelector((state) => state.message)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearMessage())
    }, [dispatch])

    // if (isLoggedIn) {
    //     return <Navigate to="/customer" />
    // }

    return (
        <main className="bg-brand-white">
            <div className="container mx-auto h-14 flex items-center justify-between">
                <Link to="/" className="font-bold text-brand-black transition-all text-opacity-80 hover:text-opacity-100">GOGO</Link>
                <nav className="flex gap-x-8">
                    <Link to="#" className="flex gap-x-2 text-brand-black text-sm font-semibold transition-all text-opacity-80 hover:text-opacity-100">
                        <CiGlobe size={20}/>
                        English (EN)
                    </Link>
                    <Link 
                        to="#" 
                        className="flex gap-x-2 text-brand-black text-sm font-semibold transition-all text-opacity-80 hover:text-opacity-100"
                        onClick={() => setShowLoginModal(true)}
                    >
                        <HiUser size={20}/>
                        Sign in
                    </Link>
                    <Link 
                        to="#" 
                        className="flex gap-x-2 text-black text-sm font-semibold transition-all text-opacity-80 hover:text-opacity-100"
                        onClick={() => setShowRegisterModal(true)}
                    >
                        <HiUserAdd size={20}/>
                        Sign up
                    </Link>
                </nav>
            </div>

            <Modal title="Sign In" isVisible={showLoginModal} onClose={() => setShowLoginModal(false)}>
                <Formik
                    initialValues={{username: "", password: ""}}
                    validationSchema={Yup.object({
                        username: Yup.string().required("Required"),
                        password: Yup.string().required("Required")
                    })}
                    onSubmit={(values) => {
                        dispatch(login(values))
                            .unwrap()
                            .then(() => {
                                navigate("/customer")
                                window.location.reload()
                            })
                    }}
                >
                    <Form className="flex flex-col space-y-4">
                        <TextInput label="Username" name="username" type="text"/>
                        <TextInput label="Password" name="password" type="password"/>
                        <button type="submit" className="bg-brand-black text-brand-white py-4 px-8 rounded-full">Sign In</button>
                    </Form>
                </Formik>
            </Modal>

            <Modal title="Sign Up" isVisible={showRegisterModal} onClose={() => setShowRegisterModal(false)}>
                <Formik
                    initialValues={{username: "", email: "", password: ""}}
                    validationSchema={Yup.object({
                        username: Yup.string().required("Required"),
                        email: Yup.string().email("Invalid email address").required("Required"),
                        password: Yup.string().required("Required")
                    })}
                    onSubmit={(values) => {
                        dispatch(register(values))
                            .unwrap()
                            .then(() => {

                            })
                            .catch(() => {

                            })
                    }}
                >
                    <Form className="flex flex-col space-y-4">
                        <TextInput label="Username" name="username" type="text"/>
                        <TextInput label="Email" name="email" type="email"/>
                        <TextInput label="Password" name="password" type="password"/>
                        <button type="submit" className="bg-brand-black text-brand-white py-4 px-8 rounded-full">Sign Up</button>
                    </Form>
                </Formik>
            </Modal>
        </main>
    )
}
