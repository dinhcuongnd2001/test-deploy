import React from "react";
import "./Footer.scss";
import {
  PhoneOutlined,
  MailOutlined,
  TwitterOutlined,
  FacebookOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { padding } from "@mui/system";
function FooterComponent() {
  return (
    <div className="footerComponent">
      <div className="content">
        <div className="item">
          <h4 className="title mb-20">About Us</h4>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            quisquam obcaecati distinctio exercitationem maxime, necessitatibus
            doloremque quod consequatur velit tenetur animi numquam, vero quas
            cum maiores nam accusamus corrupti eligendi.
          </p>
          <div className="row mb-10">
            <PhoneOutlined />
            <span className="info">+1 234 5678 999</span>
          </div>
          <div className="row mb-10">
            <MailOutlined style={{ width: "30px", padding: "0" }} />
            <span className="info">Info@gmail.com</span>
          </div>
          <div className="row">
            <input className="input" type="text" placeholder="Your e-mail" />
            <button className="btn">Send</button>
          </div>
        </div>

        <div className="item">
          <h4 className="title mb-20">Latest Tweet</h4>
          <div className="row flex_baseline">
            <TwitterOutlined />
            <p className="desc-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quia vitae!
            </p>
          </div>
          <div className="row flex_baseline">
            <TwitterOutlined className="icon" />
            <p className="desc-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quia vitae!
            </p>
          </div>
          <div className="row flex_baseline">
            <TwitterOutlined className="icon" />
            <p className="desc-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quia vitae!
            </p>
          </div>
        </div>

        <div className="item">
          <h4 className="title mb-20">Instagram</h4>
          <div className="grid">
            <img
              className="image"
              src={require("../../asset/images/bread(1).png")}
              alt="#error"
            />
            <img
              className="image"
              src={require("../../asset/images/bread(2).png")}
              alt="#error"
            />
            <img
              className="image"
              src={require("../../asset/images/product_4.3.png")}
              alt="#error"
            />
            <img
              className="image"
              src={require("../../asset/images/pizza.png")}
              alt="#error"
            />
          </div>
        </div>

        <span className="copyright mt-20">
          Copyright - 2022, website made by Đnc. All Rights Reserved.
        </span>
        <div className="follow mt-20">
          <span className="copyright">Follow me at: </span>
          <a className="followLink" href="https://www.facebook.com/dnc.cuong/">
            <FacebookOutlined />
          </a>
          <a className="followLink" href="https://github.com/dinhcuongnd2001">
            <GithubOutlined />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
