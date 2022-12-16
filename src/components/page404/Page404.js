import React from "react";
import { Container } from "react-bootstrap";
import "./Page404.scss";
function Page404() {
  return (
    <Container>
      {/* <h1>ko vao day a</h1> */}
      <div className="main">
        <img
          src={require("../../asset/images/404.png")}
          alt="#error"
          className="image"
        />
      </div>
    </Container>
  );
}

export default Page404;
