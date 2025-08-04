import React, { useState } from "react";
import img from "../assets/LoginPage.png";
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Check required fields depending on login mode
    if (
      !username.trim() ||
      !password.trim() ||
      (!login && !email.trim())
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    // Proceed if valid
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2 h-screen flex justify-center items-center">
        <img className=" p-2" src={img} alt="" />
      </div>
      <div className="w-1/2 h-screen flex flex-col text-white gap-8  items-center bg-[#4157ff] px-24">
      <img src={logo} className="h-36 w-36" alt="" />
        {/* <form action="" className=' bg-white gap-7 rounded-2xl flex flex-col justify-center items-center py-6 px-4'> */}
        <h1 className=" font-semibold text-4xl ">
          {" "}
          {login ? "Welcome Back" : "Sign Up"}{" "}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full ">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="">Username</label>
            <input
              className="outline-none border border-[#aabdf2] rounded-xl p-4 text-md"
          type="text"
          name="username"
          placeholder="Type your Username"
          value={formData.username}
          onChange={handleChange}
            />
          </div>
         {!login && <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <input
            className="outline-none border border-[#aabdf2] rounded-xl p-4 text-md"
            type="email"
            name="email"
            placeholder="Type your Email"
            value={formData.email}
            onChange={handleChange}
            />
          </div>} 
          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            <input
            className="outline-none border border-[#aabdf2] rounded-xl p-4"
          type="password"
          name="password"
          placeholder="Write your Password"
          value={formData.password}
          onChange={handleChange}
            />
          </div>
        <button type="submit" className="bg-white text-[#4157ff] text-xl p-4 rounded-xl w-full" >
          Login
        </button>
        </form>
       
        <p className="text-[#aabdf2]">
       {login?"Don't have an account":"alerady have a account"}?{" "}
          <span
            className="text-white cursor-pointer"
            onClick={() => {
              setLogin(prev=>!prev);
            }}
          >
            {" "}
            {login ? "SignUp" : "SignIn"}{" "}
          </span>
        </p>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Login;
