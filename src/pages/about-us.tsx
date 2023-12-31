import Footer from "~/components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src="./footer-logo.png"
          className=" w-6/7 h-20"
          alt="Product Image"
        />
      </div>
      <div className=" text-center text-3xl my-2">About Us</div>
      <div>
        <div className="text-center font-serif my-2">
          <span className="inline font-bold text-red-600">CODE</span> Company is
          at the forefront of innovation, dedicated to bringing cutting-edge
          technology and futuristic gadgets to consumers. With
          a passion for pushing the boundaries of what's possible, we pride
          ourselves on being a trailblazer in the ever-evolving world of
          gadgets.
        </div>
        <section className="px-10 font-serif">
          <div className="text-center ">
            <span className="font-bold my-2">Mission Statement:</span>
            <p>
              At
              <span className="inline font-bold text-red-600">CODE</span>{" "}
              Company, our mission is to enhance and simplify the lives of
              individuals by providing them with state-of-the-art gadgets that
              seamlessly integrate into their daily routines. We believe in
              making technology accessible, enjoyable, and an integral part of
              modern living.
            </p>
          </div>
          <div className="text-center my-2">
            <span className="font-bold">Innovation Hub:</span>{" "}
            <p>
              <span className="inline font-bold text-red-600">CODE</span>{" "}
              company serves as an innovation hub where creativity meets
              functionality. We invest heavily in research and development to
              stay ahead of the curve, anticipating the needs and desires of
              tech enthusiasts. From smart home devices to wearable technology,
              our diverse range of gadgets reflects our commitment to staying on
              the cutting edge of innovation.
            </p>
          </div>
          <div className="text-center my-2">
            <span className="font-bold">Quality Assurance:</span>
            <p>
              {" "}
              Quality is the cornerstone of our ethos. Each gadget that bears
              the <span className="inline font-bold text-red-600">
                CODE
              </span>{" "}
              Company name undergoes rigorous testing to ensure durability,
              performance, and user satisfaction. We prioritize delivering
              products that not only meet but exceed the expectations of our
              discerning customers.
            </p>
          </div>
          <div className="text-center my-2">
          <span className="font-bold">Environmental Responsibility:</span>
            <p>
              As a responsible corporate citizen,{" "}
              <span className="inline font-bold text-red-600">CODE</span>{" "}
              Company is committed to sustainability. We strive to minimize our
              ecological footprint by incorporating eco-friendly materials in
              our products and implementing efficient manufacturing processes.
            </p>
          </div>
          <div className="text-center my-2">
          <span className="font-bold">Community Engagement:</span>
            <p>
              We understand the importance of community and actively engage with
              our users. Through events, social media, and customer feedback, we
              foster a sense of belonging among our gadget enthusiasts. Our
              community is an invaluable source of inspiration and insight that
              fuels our continuous quest for improvement.
            </p>
          </div>
          <div className="text-center my-2">
          <span className="font-bold">Future Outlook:</span>
            <p>
              The future is exciting, and at{" "}
              <span className="inline font-bold text-red-600">CODE</span>{" "}
              Company, we are dedicated to shaping it with groundbreaking
              technologies. Our roadmap includes further exploration of
              artificial intelligence, immersive experiences, and revolutionary
              advancements that will redefine the way people interact with
              technology.
            </p>
          </div>
        </section>
        <div className="text-center font-serif my-4 text-xl">
          Join us on our journey as we continue to innovate, inspire, and
          empower through the world of gadgets.
          <span className="inline font-bold text-red-600">CODE</span> Company
          Where Tomorrow's Technology Meets Today's Lifestyle.
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutUs;
