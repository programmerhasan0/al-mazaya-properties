import { Swiper, SwiperSlide } from "swiper/react";
import MainLayout from "../layouts/Main.Layout";
import Slider from "../components/slider/Slider.Component";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Slider />
      </MainLayout>
    </>
  );
};

export default Home;
