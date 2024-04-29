import { useState } from "react";
import axios from "axios";
import { CgCloseO } from "react-icons/cg";
import { LoginModalProps } from "../types";
import { useCookies } from "react-cookie";
import { BASE_URL } from "../constants/constants";


const LoginModal = ({ onClose, signUpModalOpen }: LoginModalProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [cookies, setCookie] = useCookies();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/login`, { email, password });

            setCookie('Email', response.data.email);
            setCookie('AuthToken', response.data.token);
            alert('Success');
            onClose();

        } catch (err) {
            console.error(err);
            setError("An error occurred. Please try again later.");
        }
    };

    const handleCreateAccount = () => {
        signUpModalOpen();
        onClose();
    };

    return (
        <>
            <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white text-lg font-semibold">Login</h3>
                        <CgCloseO onClick={onClose} className="text-red-500 hover:text-red-700 hover:cursor-pointer focus:outline-none" size={24} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-md border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-md border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="flex justify-center">
                            <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-200 
                            text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-blue-600 
                            text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Login</button>
                        </div>
                        <p className="text-white mt-4 text-center">Not registered? <button type="button" 
                        className="text-blue-500" onClick={handleCreateAccount}>Create an account</button></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginModal;
