import Footer from "~/components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src="./footer-logo.png"
          className=" w-6/7 h-20"
          alt="Product Image"
        />
      </div>
      <div className=" text-center text-2xl">How may we help you?</div>
      <Footer /> 
    </>
  );
};
export default ContactUs;
