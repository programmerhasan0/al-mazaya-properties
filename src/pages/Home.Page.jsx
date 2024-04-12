import { Swiper, SwiperSlide } from "swiper/react";
import MainLayout from "../layouts/Main.Layout";
import Slider from "../components/Slider.Component";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Properties from "../components/Properties.Component";

const Home = () => {
  document.title = "Home | Al Mazaya Properties";
  return (
    <>
      <MainLayout>
        <Slider />
        <Properties />
      </MainLayout>
    </>
  );
};

export default Home;
