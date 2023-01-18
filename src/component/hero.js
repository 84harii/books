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
                <img  src="https://images.pexels.com/photos/15021623/pexels-photo-15021623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://images.pexels.com/photos/599619/pexels-photo-599619.jpeg?auto=compress&cs=tinysrgb&w=1600" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://images.pexels.com/photos/11403744/pexels-photo-11403744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://images.pexels.com/photos/3067112/pexels-photo-3067112.jpeg?auto=compress&cs=tinysrgb&w=1600" className="slider_img"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
