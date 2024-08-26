import BaseButton from "@/components/common/BaseButton";
import BaseTextField from "@/components/common/BaseTextfield";
import { FaArrowLeft } from "react-icons/fa";
import logo from "@/assets/images/Logo.svg";
import { Link } from "react-router-dom";

const SignupContent = () => {
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
            />
            <BaseTextField
              label="Full Name"
              placeholder="ex: john doe"
              type="text"
            />
            <BaseTextField
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <BaseTextField
              label="Retype password"
              placeholder="password"
              type="password"
            />
            <BaseButton text="Signup" btnType="filled" />

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
