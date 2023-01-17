import React from "react";
// Mantin ui slider 
import { Carousel } from '@mantine/carousel';


const Hero = () => {
  return (
    <div className="hero section-padding-t section-bg pt-0">

      {/* <img src="https://i.postimg.cc/TYX3pPQK/golden-leaf.png" className="leaf_one" alt="background_decorative_image"/> */}
      <div className="container">
        <div className="row testi-row">
          <div className="col-12 ps-0 pe-0">
            <Carousel slideSize="70%" height={200} slideGap="md"
                  align="center"  
                  slidesToScroll={1}
                  loop  withControls={false}
            >
              <Carousel.Slide>
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
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
              </Carousel.Slide>
              <Carousel.Slide>
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
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
              </Carousel.Slide>
              <Carousel.Slide>
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
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
              </Carousel.Slide>
              <Carousel.Slide>
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
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
              </Carousel.Slide>
            </Carousel>

            {/* </Swiper> */}
            {/* <div className="prev">
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="next">
              <MdOutlineNavigateNext />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
