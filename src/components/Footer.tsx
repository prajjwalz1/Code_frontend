import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer hidden w-full bg-[#F2F2F2] px-2 pb-4 pt-8 lg:block">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 justify-items-center gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-start xl:grid-cols-4 2xl:grid-cols-4">
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

            <div className="content-center items-center">
              <img
                src="./footer-logo.png"
                className="  w-6/7 "
                alt="Product Image"
              />
              <h3 className="text-3xl md:text-4xl lg:text-4xl">
                Trendy Accessories
              </h3>
              <p className="text-sl  mb-1 flex text-justify">
                CODE: Innovating Your Tech Lifestyle. Cutting-edge gadgets,
                style, and functionality in one. Elevate your tech experience
                with us. Discover CODE today.
              </p>
              <div className="-my-2 font-bold">FOLLOW US</div>
              <div className="mt-4 grid grid-cols-4 gap-x-5">
                <a
                  href="https://www.facebook.com/profile.php?id=100089926826291&mibextid=LQQJ4d"
                  className="mr-4 w-16"
                >
                  <img
                    src="https://logolook.net/wp-content/uploads/2021/06/Facebook-Logo.png"
                    alt="logo"
                  />
                </a>
                <a href="https://www.instagram.com/" className="mr-4 w-16">
                  <img
                    src="https://logolook.net/wp-content/uploads/2021/06/Instagr%D0%B0m-Logo.png"
                    alt="logo"
                  />
                </a>
                <a href="https://www.tiktok.com/en/" className="mr-4 w-16">
                  <img
                    src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Tiktok.png"
                    alt="logo"
                  />
                </a>
                <a href="https://www.youtube.com/" className="mr-4 w-16">
                  <img
                    src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Youtube.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="flex  w-full flex-row items-center  justify-center">
          <img src="./RedLogoMobile.png" className="h-5 w-5" />
          <p className="text-center text-[10px] font-bold text-black sm:text-[15px] lg:text-base">
            Copyright © 2023 Code - All rights reserved.
          </p>
        </section>
      </footer>

      <footer className=" block lg:hidden">hello duniya</footer>
    </>
  );
};

export default Footer;