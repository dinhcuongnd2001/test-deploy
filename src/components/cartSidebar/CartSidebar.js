import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getQuantity } from "../../redux/selector";
import "./CartSidebar.scss";
import userSlice from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
function CartSidebar({ invisibale, setInvisibale }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currCart = useSelector(getCart);
  const quantity = useSelector(getQuantity);
  const total = currCart.reduce(
    (res, curr) => (res += curr.count * curr.price),
    0
  );
  const handleClose = () => {
    // console.log("hi");
    setInvisibale(!invisibale);
  };

  const handleSubProduct = (product) => {
    dispatch(userSlice.actions.subQuantity(product));
  };
  const handleAddProduct = (product) => {
    dispatch(userSlice.actions.addQuantity(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(userSlice.actions.removeProduct(product));
  };

  return (
    <div className="cartSidebar">
      <div className="carContent">
        <AiOutlineCloseCircle className="btnClose" onClick={handleClose} />
        {currCart.length ? (
          <div className="listProduct">
            {currCart.map((item) => (
              <div key={item.id} className="info_product">
                <img
                  src={require(`../../asset/images/${item.image01}`)}
                  alt="#error"
                  className="image"
                />
                <div className="desc_product">
                  <h6 className="name">{item.title}</h6>
                  <p className="price_product">
                    <span className="count">x {item.count}</span>
                    <span className="sub_total">
                      ${item.count * item.price}
                    </span>
                  </p>
                  <div className="update">
                    <GrAdd
                      className="icon"
                      onClick={() => handleAddProduct(item)}
                    />{" "}
                    <span>{item.count}</span>{" "}
                    <GrSubtract
                      onClick={() => handleSubProduct(item)}
                      className="icon"
                    />
                  </div>
                </div>
                <AiOutlineClose
                  onClick={() => handleRemoveProduct(item)}
                  className="icon"
                ></AiOutlineClose>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty_cart">
            <h6 className="noti">
              No item add to cart <HiOutlineEmojiSad className="icon" />
            </h6>
            <BsCartX className="icon"></BsCartX>
          </div>
        )}{" "}
        <div className="footer">
          <div className="footer_info">
            <h6 className="quantity">
              Subtotal Quantity: <span className="custom">{quantity}</span>
            </h6>
            <h6 className="quantity">
              Subtotal amount: <span className="custom">${total}</span>
            </h6>
          </div>
          <button
            onClick={() => {
              setInvisibale(!invisibale);
              navigate("../checkout");
            }}
            className="btn"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSidebar;
