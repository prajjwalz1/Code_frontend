import Carousel from "nuka-carousel";

const SlidingCarousel = () => {
  return (
    <Carousel
      defaultControlsConfig={{
        // pagingDotsStyle: { display: "none" },
        nextButtonStyle: { display: "none" },
        prevButtonStyle: { display: "none" },
      }}
      renderBottomCenterControls={(controlProps) => (
        <div className="mb-2 flex items-center gap-x-2">
          {[...Array(controlProps.slideCount)].map((e, key) => (
            <div
              key={key}
              onClick={() => controlProps.goToSlide(key)}
              className={`h-1 w-6 cursor-pointer space-y-6 rounded-full opacity-20 ${
                controlProps.currentSlide === key
                  ? "bg-gray-900"
                  : "bg-gray-400"
              }  hover:bg-gray-600`}
            ></div>
          ))}
        </div>
      )}
      autoplay={true}
    >
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
      <img src="https://zebronics.com/cdn/shop/collections/zeb-Wireless-earbuds-banner.jpg" />
    </Carousel>
  );
};
export default SlidingCarousel;