import React, { useState } from "react";
import "./Home.scss";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import filterSilce from "../../redux/filterSlice";
import Slider from "../../components/slider/Slider";
import {
  getFoodsBySelect,
  getFoodsByCost,
  getCategory,
} from "../../redux/selector";
import {
  RightOutlined,
  CarOutlined,
  PropertySafetyOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import ProductComponent from "../../components/productComponent/ProductComponent";
function Home() {
  const foods = useSelector(getFoodsBySelect);
  const hotPizza = useSelector(getFoodsByCost);
  const currCategory = useSelector(getCategory);
  const [filter, setFilter] = useState(currCategory);
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(filterSilce.actions.byCategory(value));
    setFilter(value);
  };
  return (
    <Container>
      <div className="Banner">
        <div className="left">
          <h5 className="info">Easy way to make an order</h5>
          <h1 className="sologan">
            <span className="custom upcase">Hungry? </span>
            Just wait food at
            <span className="custom"> your door</span>
          </h1>

          <p className="desc mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            repudiandae nam quo voluptatibus cum sit?
          </p>

          <div className="row mb-60">
            <Link to="/foods" className="btn bnt-1">
              Order now <RightOutlined />
            </Link>
            <Link to="/foods" className="btn btn-2">
              See All Foods
            </Link>
          </div>
          <div className="row">
            <div className="service">
              <CarOutlined className="icon" />

              <div className="desc">No shipping charge</div>
            </div>

            <div className="service">
              <PropertySafetyOutlined className="icon" />
              <div className="desc">100% secure checkout</div>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            className="image"
            // src={require("../../asset/images/bg_section_1.png")}
            src={require("../../asset/images/hero.png")}
            alt="#error"
          />
        </div>
      </div>

      <div className="Category">
        <div className="col">
          <img
            className="image"
            src={require("../../asset/images/category-01.png")}
            // src={require("../../asset/images/1.png")}
            alt="#error"
          />
          <span className="name">Fastfood</span>
        </div>
        <div className="col">
          <img
            className="image"
            src={require("../../asset/images/category-02.png")}
            // src={require("../../asset/images/2.png")}
            alt="#error"
          />
          <span className="name">Pizza</span>
        </div>
        <div className="col">
          <img
            className="image"
            src={require("../../asset/images/category-03.png")}
            // src={require("../../asset/images/3.png")}
            alt="#error"
          />
          <span className="name">Asian Food</span>
        </div>
        <div className="col">
          <img
            className="image"
            src={require("../../asset/images/category-04.png")}
            // src={require("../../asset/images/4.png")}
            alt="#error"
          />
          <span className="name">Row Meat</span>
        </div>
      </div>

      <div className="Service">
        <div className="info">
          <h5 className="title">What we serve</h5>
          <h2 className="sologan">Just sit back at home</h2>
          <h2 className="sologan mb-40">
            We will <span className="custom">take care</span>
          </h2>
          <p className="desc">
            Lorem ipsum dolor consectetur adipisicing. Iure eum vitae suscipit
            temporibus!
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur elit. Iure facere optio eaque
            ex?
          </p>
        </div>

        <div className="detail">
          <div className="item">
            <img
              src={require("../../asset/images/service-01.png")}
              alt="#error"
              className="image"
            />
            <h5 className="name">Quick Delivery</h5>
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              deleniti maiores?
            </p>
          </div>

          <div className="item">
            <img
              src={require("../../asset/images/service-02.png")}
              alt="#error"
              className="image"
            />
            <h5 className="name">Super Dine In</h5>
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              deleniti maiores?
            </p>
          </div>

          <div className="item">
            <img
              src={require("../../asset/images/service-03.png")}
              alt="#error"
              className="image"
            />
            <h5 className="name">Easy Pick Up</h5>
            <p className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              deleniti maiores?
            </p>
          </div>
        </div>
      </div>

      <div className="Popular">
        <h2 className="title">Popular Foods</h2>
        <div className="filter">
          <div
            onClick={() => handleClick("All")}
            className={filter == "All" ? "btn active" : "btn"}
          >
            All
          </div>
          <div
            onClick={() => handleClick("Burger")}
            className={filter == "Burger" ? "btn active" : "btn"}
          >
            <img
              className="image"
              src={require("../../asset/images/hamburger.png")}
              alt="#error"
            />
            Burger
          </div>
          <div
            onClick={() => handleClick("Pizza")}
            className={filter == "Pizza" ? "btn active" : "btn"}
          >
            <img
              className="image"
              src={require("../../asset/images/pizza.png")}
              alt="#error"
            />
            Pizza
          </div>
          <div
            onClick={() => handleClick("Bread")}
            className={filter == "Bread" ? "btn active" : "btn"}
          >
            <img
              className="image"
              src={require("../../asset/images/bread.png")}
              alt="#error"
            />
            Bread
          </div>
        </div>
        <div className="product">
          {foods?.map((food) => (
            <ProductComponent food={food} key={food.id} />
          ))}
        </div>
      </div>

      <div className="Info">
        <img
          className="image"
          // src={require("../../asset/images/bg_section_2.png")}
          src={require("../../asset/images/location.png")}
          alt="#error"
        />
        <div className="detail">
          <h2 className="title">
            Why <span className="custom">Tasty Treat?</span>
          </h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic
            culpa beatae commodi, officiis impedit non. Vitae veritatis
            necessitatibus, expedita quibusdam quasi officia sint accusamus?
            Minus, tempore. Sit, tenetur rem.
          </p>
          <div className="blog">
            <div className="item">
              <span className="name">
                <CheckCircleOutlined className="icon" /> Fresh and tasty foods
              </span>
              <p className="desc f-14">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat voluptas.
              </p>
            </div>

            <div className="item">
              <span className="name">
                <CheckCircleOutlined className="icon" /> Fresh and tasty foods
              </span>
              <p className="desc f-14">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat voluptas.
              </p>
            </div>

            <div className="item">
              <span className="name">
                <CheckCircleOutlined className="icon" /> Order from any location
              </span>
              <p className="desc f-14">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="HotPizza">
        <h2 className="title">Hot Pizza</h2>
        <div className="product">
          {hotPizza?.map((food) => (
            <ProductComponent food={food} key={food.id} />
          ))}
        </div>
      </div>

      <div className="Slider">
        <div className="info">
          <h5 className="title mb-24">Testimonial</h5>
          <h2 className="heading mb-24">
            What our <span className="custom">customers</span> are saying
          </h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            eius ipsa aut, iusto ipsum, modi omnis debitis commodi error
            blanditiis nam facere placeat consequatur!
          </p>
          <Slider />
        </div>

        <img
          src={require("../../asset/images/network.png")}
          // src={require("../../asset/images/session-bg-3.png")}
          alt=""
          className="image"
        />
      </div>
    </Container>
  );
}

export default Home;
