import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setemail] = useState();
    const navigate = useNavigate();
    const [password, setpassword] = useState();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(!email || !password){
            alert("Please enter your email and password");
            return;
        }
        try {
            const request = await axios.post("https://moviezone-q639.onrender.com/api/v1/login",{
                email,
                password
            })
            localStorage.setItem("user", JSON.stringify(request.data.user))
            alert("Logged in successfully");
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.log(error);
            alert("Invalid credentials. Please try again.");
        }
    }
    return (
        <>
            <section class="bg-gray-50">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    
                    <div class="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-100">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                🔑 Welcome Back to MovieZone!
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 " >✉️ Your Email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" value={email} onChange={(e)=>setemail(e.target.value)} />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">🔒 Your Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true"  value={password} onChange={(e)=>setpassword(e.target.value)}/>
                                </div>
                                
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500" onClick={handlesubmit}>🚀 Log In</button>
                                <p class="text-sm font-light text-gray-700 dark:text-gray-700">
                                    create new account? <Link to="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Click here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SignIn