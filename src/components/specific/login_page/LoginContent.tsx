import { useState } from "react";
import BaseButton from "@/components/common/BaseButton";
import BaseTextField from "@/components/common/BaseTextfield";
import { FaArrowLeft } from "react-icons/fa";
import logo from "@/assets/images/Logo.svg";
import { Link } from "react-router-dom";

const LoginContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleLogin = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with the login logic
      console.log("Logging in...", { email, password });
      // Clear errors
      setErrors({});
    }
  };

  return (
    <>
      <div className="container max-w-xl">
        <div className="flex flex-col gap-8 mt-5 max-w-sm px-5 lg:max-w-xl mx-auto ">
          <div className="flex gap-2 xl:gap-64 xl:absolute xl:top-3">
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
          <div className="flex flex-col gap-2">
            <BaseTextField
              label="Enter your email"
              placeholder="example@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
            <BaseButton text="Login" btnType="filled" onClick={handleLogin} />

            <div className="flex items-center gap-2">
              <p>Not a user yet?</p>
              <Link to="/signup">
                <a href="#" className="text-green-500 underline">
                  Create an account
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContent;
