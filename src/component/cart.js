import React, { useEffect, useState } from "react";
import CountUp, { useCountUp } from 'react-countup';
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useAllContext } from "./context/context";
import Marquee from "react-fast-marquee";

const Cart = ({ cartDrawer, confirmBook }) => {
  const { cart, handleChange, price, handleRemove } = useAllContext();

  return (
    <div className="cart">
      <div className="row">
        <div className="section-title-center text-center">
          <div className="cart__close" onClick={cartDrawer}>
            <MdOutlineClose />
          </div>
          <h2 className="fs-5">Your cart items</h2>
          <Marquee pauseOnHover={true} speed={46} gradientWidth={46}>
            <span>
              Thank you for Shopping with us{" "}
              <img
                src="https://rd-label.vercel.app/static/media/RD-Luxurious-logo_1.210dc48211329c8be1480ca1d0a35b72.svg"
                width={20}
                style={{ opacity: "0.84", marginTop: "-5px" }}
              />
            </span>
            &nbsp;&nbsp;
          </Marquee>
          {/* <div className="section-divider divider-triangle"></div> */}
        </div>
      </div>
      <div className="cart__books bs-scroll">
        {cart.map((cartItem) => (
          <div className="row mb-3" key={cartItem.id}>
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="cart__books__image">
                <img src={cartItem.img} alt="book" className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-8 ps-sm-0">
              <div className="cart__books__content">
                <p className="title">{cartItem.title}</p>
                Price:{" "}
                {parseInt(cartItem.price) === cartItem?.offerPrice ? (
                  <>
                    <span>₹{cartItem.price}</span>
                  </>
                ) : (
                  <>
                    <del>₹{cartItem.price}</del>{" "}
                    <span>₹{cartItem.offerPrice}</span>
                  </>
                )}
                <div className="calculation">
                  <div className="calculation__button">
                    {cartItem.amount === 1 ? (
                      <button onClick={() => handleRemove(cartItem.id)}>
                        <AiOutlineDelete />
                      </button>
                    ) : (
                      <button onClick={() => handleChange(cartItem, -1)}>
                        <AiOutlineMinus />
                      </button>
                    )}
                    <span>{cartItem.amount}</span>
                    <button onClick={() => handleChange(cartItem, 1)}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <span className="calculation__price">₹{cartItem.total}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart__confirm">
        <div className="cart__confirm__price">
          <span>Subtotal:</span>
          <strong> 
            ₹
            <CountUp
              end={price}
              useEasing={true}
              enableScrollSpy={true}
              scrollSpyDelay={40000}
              // scrollSpyOnce={true}
            />
          </strong>
        </div>
        <button className="button button__primary" onClick={confirmBook}>
          <span>Confirm</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
