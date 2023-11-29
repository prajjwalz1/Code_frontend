import Footer from "~/components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src="./footer-logo.png"
          className=" w-6/7 h-20"
          alt="Product Image"
        />
      </div>
      <div className=" text-center text-2xl">How may we help you?</div>

      <div className="mx-auto mt-10 max-w-xl rounded-md bg-white p-6 shadow-md">
        <form>
          <div className="mb-4">
            <label className="mb-2 block">Your Email </label>
            <input
              type="email"
              className="w-full rounded border p-2"
              placeholder="your@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block"> Phone Number</label>
            <input
              type="Phone number"
              className="w-full rounded border p-2"
              placeholder="+977-98......"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Subject:</label>
            <input
              type="text"
              className="w-full rounded border p-2"
              placeholder="Enter a Product Name"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block">Compose:</label>
            <textarea
              className="h-40 w-full rounded border p-2"
              placeholder="Share your enquiry or problem regarding product"
            ></textarea>
          </div>
          <label
            htmlFor="files"
            className="cursor-pointer rounded bg-red-500 p-2 text-white"
          >
            Attach Files
          </label>
          <button type="submit" className="rounded bg-red-500 p-2 mx-2 text-white hover:bg-red-600">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;
