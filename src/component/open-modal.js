import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { useAllContext } from "./context/context";
import logo from "../component/global/RD-Luxurious-logo_1.svg";
import { IoMdArrowBack } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import parse from 'html-react-parser';
const OpenModal = ({ book, handleRemove, handleChange, addToCart }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const color = {
  //   background: `${book.color}`
  // };
  const { cart } = useAllContext();
  const showToastMessage = () => {
    toast.success(`${book.title} added to cart`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <div className="icon" onClick={handleShow}>
        <MdZoomOutMap />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className="modal fade signInModal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal__wrapper">
          <div className="modal__wrapper--top position-relative">
            <span className="close" onClick={handleClose}>
              <IoMdArrowBack />
            </span>
            <img src={logo} alt="RD" width={46} />
            <img src="https://i.postimg.cc/PxC0xmYh/pattern-17.png" className="rotate_animation"/>
            <span style={{ color: "#00000000" }}>........</span>
          </div>
          <div className="row modal__wrapper__bottom">
            <div className="col-lg-6 mb-4 mb-lg-0">
              {/* <div
                className="img-fluid image_card"
                style={{ backgroundImage: `url(${book.img})` }}
              ></div> */}
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -800],
                    rotate: [180, 0, 0],
                  },
                  next: {
                    shadow: true,
                    translate: [0, 0, -800],
                    rotate: [-180, 0, 0],
                  },
                }}
                modules={[EffectCreative,Autoplay, Pagination, Navigation]}
                className="mySwiper4"
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: true,
                }}
                
              >
                {/* <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={false} 
              className="mySwiper"
              modules={[EffectFade,Autoplay, Pagination, Navigation]}
              loop={true}
              loopFillGroupWithBlank={true}  
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
            > */}
                <SwiperSlide>
                  <img className="img-fluid img"  src={book.img} alt={book.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid img" 
                    src={book.image1}
                    alt={book.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid img" 
                    src={book.image2}
                    alt={book.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid img" 
                    src={book.image3}
                    alt={book.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid img" 
                    src={book.image4}
                    alt={book.title}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-6">
              <h3>{book.title}</h3>
              <div className="description">{parse(book.desc)}</div> 
              <ul>
                <li>
                  <span>Category</span>: {book.category}
                </li>
                <li>
                  <span>Author</span>: {book.author}
                </li>
                <li>
                  <span>Language</span>: {book.language}
                </li>
                {book.pages === "" ? (
                  ""
                ) : (
                  <li>
                    <span>Total Pages</span>: {book.pages}
                  </li>
                )}
                <li>
                  <span>Price</span>: {book.price}
                </li>
                <li>
                  <span>Color</span>: {book.color}
                </li>
                <li>
                  <span>Offer Price</span>: {book.offerPrice}
                </li>
                <li>
                  <span>Publisher</span>: {book.publisher}
                </li>
                <li>
                  <span>Published</span>: {book.publishedDate}
                </li>
                {book.isbn === "" ? (
                  ""
                ) : (
                  <li>
                    <span>ISBN</span>: {book.isbn}
                  </li>
                )}
              </ul>
              {cart.find((data) => data.id === book.id) ? (
                <>
                  {cart.map((newData) =>
                    newData.id === book.id ? (
                      <div key={newData.id} className="calculation">
                        <div className="calculation__button">
                          {newData.amount === 1 ? (
                            <button onClick={() => handleRemove(book.id)}>
                              <AiOutlineDelete />
                            </button>
                          ) : (
                            <button onClick={() => handleChange(newData, -1)}>
                              <AiOutlineMinus />
                            </button>
                          )}
                          <span>{newData.amount}</span>
                          <button onClick={() => handleChange(newData, 1)}>
                            <AiOutlinePlus />
                          </button>
                        </div>
                        <span>${newData.total}</span>
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </>
              ) : (
                <button
                  onClick={() => addToCart(book)}
                  className="button button__primary w-100 mt-3"
                >
                  <span className="add-cart-btn" onClick={showToastMessage}>
                    <CgShoppingBag />
                    <span> Add to cart</span>
                  </span>
                </button>
              )}
            </div>

            <ToastContainer
              icon={false}
              position="top-center"
              autoClose={2500}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OpenModal;
