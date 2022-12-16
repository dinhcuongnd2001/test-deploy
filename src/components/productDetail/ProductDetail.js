import React, { useState } from "react";
import SessionFood from "../sessionFood/SessionFood";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./ProductDetail.scss";
import { useDispatch } from "react-redux";
import userSlice from "../../redux/userSlice";
function ProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    state: { food },
  } = useLocation();
  const [image, setImage] = useState(food.image01);
  const handleClick = (data) => {
    setImage(data);
  };
  const handleAddToCard = () => {
    dispatch(userSlice.actions.addQuantity(food));
  };

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <SessionFood title={food.title} />
      <Container>
        <div className="detail">
          <div className="totalImage">
            <img
              onClick={() => handleClick(food.image01)}
              src={require(`../../asset/images/${food.image01}`)}
              alt="#error"
              className="image"
            />
            <img
              onClick={() => handleClick(food.image02)}
              src={require(`../../asset/images/${food.image02}`)}
              alt="#error"
              className="image"
            />
            <img
              onClick={() => handleClick(food.image03)}
              src={require(`../../asset/images/${food.image03}`)}
              alt="#error"
              className="image"
            />
          </div>
          <img
            src={require(`../../asset/images/${image}`)}
            alt=""
            className="centerImage"
          />
          <div className="info">
            <h2 className="name">{food.title}</h2>
            <span className="price">
              Price:
              <span className="custom"> ${food.price}</span>
            </span>
            <p className="category">
              Category: <span className="custom">{food.category}</span>
            </p>
            <button onClick={handleAddToCard} className="btn">
              Add to Cart
            </button>
            <button onClick={handleBack} className="btn">
              Back
            </button>
          </div>
        </div>
        <div className="about"></div>
      </Container>
    </div>
  );
}

export default ProductDetail;
