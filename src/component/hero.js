import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

const Hero = () => {
  return (
    <div className="hero section-padding-t section-bg pt-0">
      {/* <img src="https://i.postimg.cc/TYX3pPQK/golden-leaf.png" className="leaf_one" alt="background_decorative_image"/> */}
      <div className="container">
        <div className="row testi-row">
          <div className="col-12 ps-0 pe-0">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={false} 
              className="mySwiper"
              modules={[EffectFade,Autoplay, Pagination, Navigation]}
              loop={true}
              loopFillGroupWithBlank={true}  
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img  src="https://source.unsplash.com/1600x900/?shopping" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://source.unsplash.com/1600x900/?ecommerce" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://source.unsplash.com/1600x900/?sale" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://source.unsplash.com/1600x900/?discount" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://source.unsplash.com/1600x900/?product" className="slider_img"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
