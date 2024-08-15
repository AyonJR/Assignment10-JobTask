import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Signup = () => {
    const { createUser, loginUserWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirmpassword.value;

        if (password === confirm) {
            createUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.error("Passwords do not match");
        }
    };

    const handleGoogleSignup = () => {
        loginUserWithGoogle()
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="mt-10 custom-font">
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <div className="flex justify-center">
                    <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                        Signup
                    </h2>
                </div>
                <form onSubmit={handleSignup}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="emailAddress"
                            >
                                Email Address
                            </label>
                            <input
                                id="emailAddress"
                                name="email"
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label
                                className="text-gray-700 dark:text-gray-200"
                                htmlFor="passwordConfirmation"
                            >
                                Password Confirmation
                            </label>
                            <input
                                id="passwordConfirmation"
                                name="confirmpassword"
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <button
                            type="submit"
                            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={handleGoogleSignup}
                            className="flex items-center px-4 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            <FaGoogle className="mr-2" />
                            Sign up with Google
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Signup;
