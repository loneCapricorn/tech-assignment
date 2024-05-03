import { Form, useNavigate } from "react-router-dom";
import { FORM_LOGO } from "../constants";

// context
import { useContext, useEffect } from "react";
import AppContext from "../providers/AppContext";

// services
import { createUserHandle, getUserByHandle } from "../services/user-services";
import { registerUser } from "../services/auth-services";

// icons
import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const SignUp = () => {
  const { user, setContext } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    user ? navigate("/dashboard") : null;
  }, [user, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const pass = event.target.elements.password.value;
    const user = await getUserByHandle(username);

    if (user.exists()) {
      alert(`Username @${username} has already been taken!`);
      return;
    }

    try {
      const credentials = await registerUser(email, pass);
      await createUserHandle(username, credentials.user.uid, email);
      setContext({
        user: credentials.user,
        userData: null,
      });
      alert("Congratulations! Your account has been successfully created!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="relative h-screen bg-[#ecf0f3]">
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
            Sign up
          </h2>
        </div>
        <div className="w-full p-1">
          <div className="input-container">
            <CiUser className="text-2xl text-[#999] mx-3" />
            <input
              type="text"
              name="username"
              placeholder="username"
              className="input-field"
            />
          </div>
          <div className="input-container">
            <MdAlternateEmail className="text-2xl text-[#999] mx-3" />
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
              type="password"
              name="password"
              placeholder="password"
              className="input-field"
            />
          </div>
        </div>
        <button className="outline-none border-none cursor-pointer w-full h-14 rounded-3xl text-xl font-bold text-white bg-[#44403c] shadow-button hover:bg-[#000]">
          Sign up
        </button>
      </Form>
    </main>
  );
};

export default SignUp;
