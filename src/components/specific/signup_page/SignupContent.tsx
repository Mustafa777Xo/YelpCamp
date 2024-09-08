import BaseButton from "@/components/common/BaseButton";
import BaseTextField from "@/components/common/BaseTextfield";
import { FaArrowLeft } from "react-icons/fa";
import logo from "@/assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Users } from "@/types/types";
const SignupContent = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setreTypePassword] = useState("");

  const [errors, setErrors] = useState<Users>({
    email: "",
    password: "",
    reTypePassword: "",
    fullName: "",
  });

  const handleSignUp = () => {
    const newErrors: Users = {
      email: "",
      password: "",
      reTypePassword: "",
      fullName: "",
    };

    if (!email) newErrors.email = "Email is required";
    if (!fullName) newErrors.fullName = "fullName is required";
    if (!password) newErrors.password = "Password is required";
    if (!reTypePassword) newErrors.reTypePassword = "You must retype password";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with the login logic
      console.log("Logging in...", { email, password });
      // Clear errors
      setErrors({
        email: "",
        password: "",
        reTypePassword: "",
        fullName: "",
      });
    }
  };
  return (
    <>
      <div className="container max-w-xl">
        <div className="flex flex-col xl:gap-8 max-w-sm px-2 lg:max-w-xl mx-auto ">
          <div className="flex gap-2 xl:gap-64 xl:absolute  xl:top-3 ">
            <img src={logo} alt="" />
            <Link to="/home">
              <BaseButton
                text="Back to campgrounds"
                btnType="text"
                icon={FaArrowLeft}
              />
            </Link>
          </div>
          <h1 className="text-2xl xl:text-4xl font-bold">
            Start exploring camps from all around the world.
          </h1>
          <div className="flex flex-col xl:gap-4">
            <BaseTextField
              label="Enter your email"
              placeholder="example@gmail.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            <BaseTextField
              label="Full Name"
              placeholder="ex: john doe"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
            <BaseTextField
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
            <BaseTextField
              label="Retype password"
              placeholder="password"
              type="password"
              value={reTypePassword}
              onChange={(e) => setreTypePassword(e.target.value)}
            />
            {errors.reTypePassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.reTypePassword}
              </p>
            )}
            <BaseButton text="Signup" btnType="filled" onClick={handleSignUp} />

            <div className="flex items-center gap-2">
              <p>Have and accont?</p>
              <Link to="/login">
                <a href="#" className="text-green-500 underline">
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupContent;
