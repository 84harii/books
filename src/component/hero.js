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
                <img  src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://images.unsplash.com/photo-1535242208474-9a2793260ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://images.unsplash.com/photo-1566405382187-a5937a822773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80  " className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://images.unsplash.com/photo-1601258166723-ebbde89682a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" className="slider_img"/>
              </SwiperSlide>
              <SwiperSlide>
                <img  src="https://images.unsplash.com/photo-1598978503025-4296960f75e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80" className="slider_img"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
