import React from "react";
import SessionFood from "../../components/sessionFood/SessionFood";
import { Container } from "react-bootstrap";
import "./Contract.scss";
function Contact() {
  return (
    <>
      <SessionFood title="Contract Us" />

      <Container>
        <div className="contract">
          <div className="contract-form">
            <h3 className="title">Contract Us</h3>
            <p className="desc">
              For any query/help, please call: 0988062350 (Everyday, 9 AM- 10
              PM)
            </p>

            <p className="p-contract">
              Or send us an email:{" "}
              <span className="custom">dinhcuongnd2001@gmail.com</span>
            </p>
            <h6 className="location">Office Location</h6>
            <p className="name">Shop DNC</p>
            <p className="address">Hà Đông - Hà Nội</p>
            <div className="form">
              <form>
                <div className="form-floating mb-3">
                  <input
                    placeholder="your name"
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                  <label htmlFor="exampleInputPassword1">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control mb-3"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">Comments</label>
                </div>
                <button type="submit" className="btn btn-submit">
                  Send
                </button>
              </form>
            </div>
          </div>
          <img
            src={require("../../asset/images/logo_1.png")}
            alt=""
            className="image"
          />
        </div>
      </Container>
    </>
  );
}

export default Contact;
