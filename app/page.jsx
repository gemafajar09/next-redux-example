"use client"

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Login } from "./redux/action/login"
import { useDispatch } from "react-redux";

export default function Home() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [errors, setErrors] = useState({}); 

    const validateForm = () => { 
        let errors = {}; 
  
        if (!password) { 
            errors.password = '* Wajib Di Isi.'; 
        } 
  
        if (!email) { 
            errors.email = '* Wajib Di Isi.'; 
        }
  
        setErrors(errors);
        return (Object.keys(errors).length === 0);
    }; 

    const loginuser = () => {
        const isValid = validateForm()
        if (!isValid) return
    
        dispatch(Login(email, password))
    }
    
    return ( 
        <>
            <div className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>

                            <div className="relative">
                                <input type={show ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} className={` bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="*********"/>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">

                                <FontAwesomeIcon onClick={() => setShow(!show)} className={`h-5 dark:text-white text-gray-700 ${show ? 'block' : 'hidden'}`} icon={faEye} />

                                <FontAwesomeIcon onClick={() => setShow(!show)} className={`h-5 dark:text-white text-gray-700 ${show ? 'hidden' : 'block'}`} fill="none" icon={faEyeSlash}/>

                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="button" onClick={() => loginuser()} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}