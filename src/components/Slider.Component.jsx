import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const sliderData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1523034602162-2311a7bcf07b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Your Dream Is Here",
    description:
      "Provident cupiditate voluptatem et in. Quaerat fugiat utassumenda excepturi exercitationem quasi. In deleniti eaqueaut repudiandae et a id nisi.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1499750264616-eca69646ae17?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Your Dream | Our Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit ratione fuga sapiente molestias dolores libero natus assumenda facere sequi quae, repellendus laboriosam autem magni, numquam dolorum a maxime mollitia?",
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        className="max-h-full"
        spaceBetween={50}
        slidesPerView="auto"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        parallax={true}
      >
        {sliderData.map(({ id, title, img, description }) => (
          <SwiperSlide key={id}>
            {" "}
            <div
              className="hero min-h-screen"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-3xl font-bold animate__bounceIn">
                    {title}
                  </h1>
                  <p className="mb-5">{description}</p>
                  <button className="btn btn-success text-white">
                    Find Your House
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
