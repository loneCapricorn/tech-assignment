import { Form, NavLink } from "react-router-dom";
import { useState } from "react";
import { FORM_LOGO } from "../constants";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const pass = event.target.elements.password.value;

    // Do something with the email and password
  };

  return (
    <main className="relative h-[92vh] bg-[#ecf0f3]">
      <Form
        onSubmit={handleSubmit}
        className="absolute-position-center form-element"
      >
        <div className="flex gap-5 flex-col items-center mb-16">
          <img
            src={FORM_LOGO}
            alt="form-logo"
            className="w-24 h-24 rounded-[50%]"
          />
          <h2 className="text-[#555] text-3xl tracking-wider font-medium">
            Tech Assignment
          </h2>
        </div>
        <div className="w-full p-1">
          <div className="input-container">
            <CiUser className="text-2xl text-[#999] mx-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
            />
          </div>
          <div className="input-container">
            <CiLock className="text-2xl text-[#999] mx-3" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input-field"
            />
            {/* Conditional rendering based on state (renders different icons) */}
            {showPassword ? (
              <FaEyeSlash
                className="text-2xl text-[#999] mx-3 cursor-pointer"
                onClick={togglePassword}
              />
            ) : (
              <FaEye
                className="text-2xl text-[#999] mx-3 cursor-pointer"
                onClick={togglePassword}
              />
            )}
          </div>
        </div>
        <button className="outline-none border-none cursor-pointer w-full h-14 rounded-3xl text-xl font-bold text-white bg-[#fc5130] shadow-button hover:bg-[#000] active:bg-[#ff843c]">
          Login
        </button>
        <div className="p-5 text-center text-base">
          <NavLink to={"/"} className="no-underline text-[#aaa]">
            Forgot password?
          </NavLink>
          <span className="font-semibold"> or </span>
          <NavLink to={"/"} className="no-underline text-[#aaa]">
            Sign Up
          </NavLink>
        </div>
      </Form>
    </main>
  );
};

export default LoginPage;
