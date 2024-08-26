import BaseButton from "@/components/common/BaseButton";
import BaseTextField from "@/components/common/BaseTextfield";
import { FaArrowLeft } from "react-icons/fa";
import logo from "@/assets/images/Logo.svg";
import { Link } from "react-router-dom";

const LoginContent = () => {
  return (
    <>
      <div className="container max-w-xl">
        <div className="flex flex-col gap-8 mt-5 max-w-sm px-5 lg:max-w-xl mx-auto ">
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
          <div className="flex flex-col gap-2">
            <BaseTextField
              label="User Name"
              placeholder="jonndoe_91"
              type="text"
            />
            <BaseTextField
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <BaseButton text="Login" btnType="filled" />

            <div className="flex items-center gap-2">
              <p>Not a user yet?</p>
              <a href="#" className="text-green-500 underline">
                Create an account
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContent;
