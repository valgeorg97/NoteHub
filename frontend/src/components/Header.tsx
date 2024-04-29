import { useState } from "react";
import logo from '../assets/logo2.png';
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { HeaderProps } from "../types";
import { useCookies } from "react-cookie";

const Header = ({ userEmail }: HeaderProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();


  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCreateAccountClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleSignOut = () => {
        removeCookie('Email');
        removeCookie('AuthToken');
        window.location.reload();
  };

  return (
    <div className="h-16 flex items-center justify-between px-0 py-10 border-b-2 border-gray-600">
      <div className="flex items-start justify-start">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      
      <div className="text-white text-lg mr-6">{userEmail ? `Welcome, ${userEmail}` : ""}</div>
      
      <div>
        {userEmail ? (
          <button type="button" onClick={handleSignOut} className="text-white bg-red-500 
          focus:outline-none hover:bg-red-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 
          dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign Out</button>
        ) : (
          <button type="button" onClick={handleLoginClick} className="text-white bg-blue-500 
          focus:outline-none hover:bg-blue-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 
          dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
        )}
      </div>

      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} signUpModalOpen={handleCreateAccountClick} />}
      {isSignUpModalOpen && <SignUpModal onClose={() => setIsSignUpModalOpen(false)} />}
    </div>
  );
};

export default Header;
