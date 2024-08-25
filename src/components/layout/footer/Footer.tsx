import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoLight from "@/assets/images/Logo_light.svg";
const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6 mt-5">
      <div className="container mx-auto text-center lg:text-left">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Brand/Logo Section */}
          <div className="mb-4 lg:mb-0">
            <img src={logoLight} alt="" />
          </div>

          {/* Navigation Links */}
          <div className="mb-4 lg:mb-0">
            <ul className="flex flex-col lg:flex-row lg:space-x-6">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-4">
          <p>&copy; 2024 Mustafa777Xo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
