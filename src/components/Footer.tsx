import React from "react";
// import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer w-full bg-gray-300 pt-8 pb-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <a href="#" className="support">
            <div className="mt-4">
              <h4 className="mb-2 text-2xl font-bold">SUPPORT</h4>
              <ul>
                <li className="mb-2 text-xl">Contact Us</li>
                <li className="mb-2 text-xl">User Guide</li>
                <li className="mb-2 text-xl">Warranty</li>
                <li className="mb-2 text-xl">Digital Services Act</li>
              </ul>
            </div>
          </a>
          <a href="#" className="about">
            <div className="mt-4">
              <h4 className="mb-2 text-2xl font-bold">ABOUT US</h4>
              <ul>
                <li className="mb-2 text-xl">Leadership Team</li>
                <li className="mb-2 text-xl">Privacy Policy</li>
                <li className="mb-2 text-xl">Integrity & Compliance</li>
                <li className="mb-2 text-xl">Trust Center</li>
                <li className="mb-2 text-xl">Code Accessibility</li>
              </ul>
            </div>
          </a>
          <a href="#" className="code product">
            <div className="mt-4">
              <h4 className="mb-2 text-2xl font-bold">CODE PRODUCT</h4>
              <ul>
                <li className="mb-2 text-xl">Code Creators</li>
                <li className="mb-2 text-xl">Code Studios</li>
                <li className="mb-2 text-xl">Code Imagery</li>
                <li className="mb-2 text-xl">Code Master Class</li>
                <li className="mb-2 text-xl">Code Renovation</li>
              </ul>
            </div>
          </a>
         
          <div className=" -mt-12 justify-items-stretch flex-center">
            <img
              src="./logo-01.png"
              className="-mb-9  w-4/5"
              alt="Product Image"
            />
            <h3 className="text-3xl font-bold -mt-20">Trendy Accessories</h3>
            <p className="mb-1 flex text-justify text-sl">
              CODE: Innovating Your Tech Lifestyle. Cutting-edge gadgets, style,
              and functionality in one. Elevate your tech experience with us.
              Discover CODE today.
            </p>
            <div className="font-bold">FOLLOW US</div>
            <div className="grid grid-cols-4 gap-x-5">
              <a href="https://www.facebook.com/" className="mr-4">
                <img
                  src="https://logolook.net/wp-content/uploads/2021/06/Facebook-Logo.png"
                  alt="logo"
                />
              </a>
              <a href="https://www.instagram.com/" className="mr-4">
                <img
                  src="https://logolook.net/wp-content/uploads/2021/06/Instagr%D0%B0m-Logo.png"
                  alt="logo"
                />
              </a>
              <a href="https://www.tiktok.com/en/" className="mr-4">
                <img
                  src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Tiktok.png"
                  alt="logo"
                />
              </a>
              <a href="https://www.youtube.com/" className="mr-4">
                <img
                  src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Youtube.png"
                  alt="logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
