import { Form, NavLink, useNavigate } from "react-router-dom";
import { FORM_LOGO } from "../constants";

// hooks
import { useState } from "react";
import { useContext } from "react";

// context
import AppContext from "../providers/AppContext";

// services
import { loginUser } from "../services/auth-services";

// icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setContext } = useContext(AppContext);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const pass = event.target.elements.password.value;

    try {
      const credentials = await loginUser(email, pass);
      setContext({ user: credentials.user, userData: null });
      alert(
        "Welcome back! You've successfully logged in. Enjoy your experience!"
      );
      navigate("/dashboard");
    } catch (error) {
      switch (error.message) {
        case "Firebase: Error (auth/invalid-email).":
          return alert(
            "Whoops! Looks like the email you entered is not valid. Please check and try again."
          );
        case "Firebase: Error (auth/missing-password).":
          return alert(
            "Seems like you forgot to enter your password. Please provide your password to continue."
          );
        case "Firebase: Error (auth/invalid-credential).":
          return alert(
            "Looks like there's an issue with your login credentials. Please double-check and try again."
          );
        default:
          return alert(
            "It seems your login credentials are incorrect. Please double-check and try again."
          );
      }
    }
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
            Login
          </h2>
        </div>
        <div className="w-full p-1">
          <div className="input-container">
            <MdAlternateEmail className="text-2xl text-[#999] mx-3" />
            <input
              type="email"
              name="email"
              placeholder="email"
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
        <button className="outline-none border-none cursor-pointer w-full h-14 rounded-3xl text-xl font-bold text-white bg-[#44403c] shadow-button hover:bg-[#000]">
          Login
        </button>
        <div className="p-5 text-center text-base">
          <NavLink to={"/forgot-password"} className="no-underline text-[#aaa]">
            Forgot password?
          </NavLink>
          <span className="font-semibold"> or </span>
          <NavLink to={"/sign-up"} className="no-underline text-[#aaa]">
            Sign Up
          </NavLink>
        </div>
      </Form>
    </main>
  );
};

export default SignIn;
