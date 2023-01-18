import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineNavigateNext,
} from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero section-padding-t section-bg pt-0">
    
      {/* <img src="https://i.postimg.cc/TYX3pPQK/golden-leaf.png" className="leaf_one" alt="background_decorative_image"/> */}
      <div className="container">
        <div className="row testi-row"> 
          <div className="col-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              autoplay
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              className="hero__swiper pb-5" 
            >
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    {/* <div className="hero__content position-relative">
                      <div className="badge-text mb-2 text-uppercase">
                        LET'S MAKE THE BEST INVESTMENT
                      </div>
                      <h1 className="display-4 mb-4 text-capitalize">
                        There Is No Friend As Loyal As A Book
                      </h1>
                      <p className="text-muted mb-5 fs-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ad harum quibusdam, assumenda quia explicabo.
                      </p>
                      <Link to="/all-books" className="button button__primary">
                        <span>Shop now</span>
                      </Link>
                    </div> */}
                  </div>
                  <div className="col-lg-6">
                    <div className="hero__images text-center">
                      <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0681/8689/8738/files/91352_2_2000x.webp?v=1671902988"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    {/* <div className="hero__content position-relative">
                      <div className="badge-text mb-2 text-uppercase">
                        LET'S MAKE THE BEST INVESTMENT
                      </div>
                      <h1 className="display-4 mb-4 text-capitalize">
                        There Is No Friend As Loyal As A Book
                      </h1>
                      <p className="text-muted mb-5 fs-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ad harum quibusdam, assumenda quia explicabo.
                      </p>
                      <Link to="/all-books" className="button button__primary">
                        <span>Shop now</span>
                      </Link>
                    </div> */}
                  </div>
                  <div className="col-lg-6">
                    <div className="hero__images text-center">
                      <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0681/8689/8738/files/91352_2_2000x.webp?v=1671902988"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="prev">
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="next">
              <MdOutlineNavigateNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
