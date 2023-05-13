import axios from "axios";
import * as Yup from "yup";
import { CiGlobe } from "react-icons/ci";
import { useState, useEffect } from "react";
import { HiUser, HiUserAdd } from "react-icons/hi";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

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

    const loginValues = {
        username: "",
        password: ""
    }

    const registerValues = {
        username: "",
        email: "",
        password: ""
    }

    const loginValidationSchema = Yup.object().shape({
        username: Yup.string().required("This field is required!"),
        password: Yup.string().required("This field is required!")
    })

    const handleLogin = (formValue) => {
        const { username, password } = formValue
        setLoading(true)

        dispatch(login({ username, password}))
            .unwrap()
            .then(() => {
                navigate("/customer")
                window.location.reload()
            })
            .catch(() => {
                setLoading(false)
            })
    }
    
    const handleRegister = (formValue) => {
        const { username, email, password } = formValue 

        setSuccessful(false);

        dispatch(register({ username, email, password}))
            .unwrap()
            .then(() => {
                setSuccessful(true)
            })
            .catch(() => {
                setSuccessful(false)
            })
    }

    if (isLoggedIn) {
        return <Navigate to="/customer" />
    }

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
                <Formik className="space-y-4 flex flex-col" initialValues={loginValues} validationSchema={loginValidationSchema} onSubmit={handleLogin}>
                    <Form>
                        <Field 
                            name="username"
                            type="text"
                            className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary"
                        />
                        <Field
                            name="password"
                            type="password"
                            className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary"
                        />
                        <button type="submit" className="bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3">Sign In</button>
                    </Form>
                </Formik>
            </Modal>

            <Modal title="Sign Up" isVisible={showRegisterModal} onClose={() => setShowRegisterModal(false)}>
                <Formik className="space-y-4 flex flex-col" initialValues={registerValues} onSubmit={handleRegister}>
                    <Form>
                        <Field name="username" type="text" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" /> 
                        <Field name="email" type="email" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" />
                        <Field name="password" type="password" className="border-2 border-gray-200 outline-none p-2 rounded-md h-12 hover:border-brand-primary focus:border-brand-primary" />
                        <button type="submit" className="bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3">Sign Up</button>
                    </Form> 
                </Formik>
            </Modal>
        </main>
    )
}
