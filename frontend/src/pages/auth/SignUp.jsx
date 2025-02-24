import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const hangdlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://moviezone-sf85.onrender.com/api/v1/register`,
        {
          name: name,
          email: email,
          password: password,
        }
      );
      alert("signup successfully");
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/", { replace: true });
      window.location.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-100 dark:border-gray-100">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 classname="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                🎬 Create Your MovieZone Account!
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    👤 Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Jon Doe"
                    required=""
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    ✉️ Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john@email.com"
                    required=""
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    🔒 Your Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-500 dark:text-blach dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-blue-500"
                  onClick={hangdlesubmit}
                >
                  🚀 Create Account
                </button>
                <p className="text-sm font-light text-gray-700 dark:text-gray-700">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
