import React, { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useAllContext } from "./context/context";
import LoadingSpinner from "./loading-spinner";
import OpenModal from "./open-modal";
import Confetti from "react-confetti";
import Marquee from "react-fast-marquee";
import CountUp, { useCountUp } from 'react-countup';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Books = () => {
  const [visible, setVisible] = useState(8);
  const { height, width } = useWindowDimensions();
  const showMoreBooks = () => {
    setVisible((pervValue) => pervValue + 4);
  };

  const {
    cart,
    allBooks,
    addToCart,
    handleChange,
    handleRemove,
    query,
    myRef,
  } = useAllContext();

  return (
    <div id="books" className="books section-padding section-bg" ref={myRef}>
      <div className="container">
        <Confetti
          width={width - 5}
          height={height}
          numberOfPieces={width}
          recycle={false}
          colors={["#002222", "#024b40", "#2b7755", "#62a462", "#a6cf69"]}
        />

        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="text-center mb-2">
    <img src="https://rd-label.vercel.app/static/media/RD-Luxurious-logo_1.210dc48211329c8be1480ca1d0a35b72.svg" width={52} />
            </div>

            <div className="section-title-center text-center">  
              <h2 className="display-6" style={{ fontFamily: "display" , fontWeight: "600 " }}>
                Popular Product
              </h2>
              <Marquee pauseOnHover={true} speed={46} gradientWidth={46}>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp; In pursuit of the finest , Among our
                  most popular products
                </span>
              </Marquee>

              {/* <div className="section-divider divider-triangle"></div> */}
            </div>
          </div>
        </div>
        <div className="row">
          {allBooks.length === 0 ? (
            <LoadingSpinner className="mb-4 col-md-6 col-lg-3" />
          ) : (
            allBooks
              .filter((book) => book.title.toLowerCase().includes(query))
              .slice(0, visible)
              .map((book) => (
                <div
                  className="col-lg-3 col-md-6 mb-4"
                  key={book.id}
                  data-aos="zoom-out-up"
                >
                  <div className="books__book">
                    {/* <img
                      className="img-fluid image_card"
                      src={book.img}  
                      alt={book.title} 
                    /> */}
                    <div
                      className="img-fluid image_card"
                      style={{ backgroundImage: `url(${book.img})` }}
                    ></div>

                    {book.offer === "0" ? (
                      ""
                    ) : (
                      <span className="books__book__discount">
                        <span className="on-sale">-{book.offer}%</span>
                      </span>
                    )}
                    <ul className="functional-icons">
                      <li>
                        <button
                          onClick={() => addToCart(book)}
                          className="icon"
                        >
                          <AiOutlineShoppingCart />
                        </button>
                      </li>
                      <li>
                        <OpenModal
                          book={book}
                          handleRemove={handleRemove}
                          handleChange={handleChange}
                          addToCart={addToCart}
                        />
                      </li>
                    </ul>
                    <div className="books__book__bottom">
                      <h3 className="books__book__bottom--title">
                        {book.title}
                      </h3>
                      <p className="books__book__bottom--subtitle">
                        {book.subtitle}
                      </p>
                      <p className="books__book__bottom--author">
                        By: <span>{book.author}</span>
                      </p>
                      <div className="price">
                        Price:{" "}
                        {parseInt(book.price) === book.offerPrice ? (
                          <>
                            <span>${book.price}</span>
                          </>
                        ) : (
                          <>
                          
                            <del>₹{book.price}</del>{" "}
                            <span>₹<CountUp end={book.offerPrice} useEasing={true} enableScrollSpy={true} scrollSpyDelay={1000} scrollSpyOnce={true}/></span>
                          </>
                        )}
                      </div>
                      {/* <div className="books__book__bottom--button">
                        {cart.find((data) => data.id === book.id) ? (
                          <>
                            {cart.map((newData) =>
                              newData.id === book.id ? (
                                <div key={newData.id} className="calculation">
                                  <div className="calculation__button">
                                    {newData.amount === 1 ? (
                                      <button
                                        onClick={() => handleRemove(book.id)}
                                      >
                                        <AiOutlineDelete />
                                      </button>
                                    ) : (
                                      <button
                                        onClick={() =>
                                          handleChange(newData, -1)
                                        }
                                      >
                                        <AiOutlineMinus />
                                      </button>
                                    )}
                                    <span>{newData.amount}</span>
                                    <button
                                      onClick={() => handleChange(newData, 1)}
                                    >
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
                            className="button button__primary"
                          >
                            <span>
                              <AiOutlineShoppingCart />
                              Add to cart
                            </span>
                          </button>
                        )}
                      </div> */}
                    </div>
                  </div>
                  {/* <div class="image-card" style="background-image: url('https://i.postimg.cc/k5jK4hvp/empty-dark-room-modern-futuristic-sci-fi-background-3d-illustration.jpg')">
      </div>  */}
                </div>
              ))
          )}
        </div>
        <div className="book-load-btn text-center mt-4">
          {allBooks.length <= visible || query !== "" ? (
            ""
          ) : (
            <button onClick={showMoreBooks} className="button button__primary">
              <span>Load More</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
