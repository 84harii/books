import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { IoIosHelpBuoy } from "react-icons/io";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="footer section-padding-t">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer__top">
              <div className="footer__top--icon">
                {/* <BsStack /> */}
              </div>
              <div className="footer__top--info">
                <h3>Product Information?</h3>
                <p>Please send us an email at ranaharsh0084@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer__top">
              <div className="footer__top--icon">
                {/* <IoIosHelpBuoy /> */}
              </div>
              <div className="footer__top--info">
                <h3>Need Help?</h3>
                <p>Please call us at <a href="tel:9316464100">9316464100</a></p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__bottom">
          <h3><a href="/">RD</a></h3>
          <p>
            © {getYear()} All right reserved. Made with <AiFillHeart /> by{" "}
            <a href="https://www.instagram.com/harii.84/">Harii</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
