import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SessionFood from "../sessionFood/SessionFood";
import { Formik, Field, Form } from "formik";
import "./Login.scss";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../redux/selector";
import userSlice from "../../redux/userSlice";

function Login() {
  const listUser = useSelector(getListUser);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This Field is required").email(),
    password: Yup.string().required("This Field is required"),
  });

  const handleSubmit = ({ email, password }) => {
    const index = listUser.findIndex((user) => user.userName === email);
    if (index < 0) {
      alert("The Account isn't exist");
    } else {
      if (
        listUser[index].userName == email &&
        listUser[index].password == password
      ) {
        dispatch(userSlice.actions.createSession(listUser[index]));
        navigate("../");
      } else {
        alert("The Password isn't true");
      }
    }
  };
  return (
    <div className="sessionLogin">
      <Container>
        <Formik
          initialValues={form}
          enableReinitialize="true"
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className="formLogin">
              <h6 style={{ marginTop: "5px", marginBottom: "0" }}>Login</h6>
              <Field
                onChange={(e) => {
                  setForm({ ...form, [e.target.name]: e.target.value });
                }}
                value={form.email}
                className="input"
                name="email"
                placeholder="Enter Your Email"
              />
              {errors.email && touched.email ? (
                <div className="warning">{errors.email}</div>
              ) : null}
              <Field
                type="password"
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                value={form.password}
                className="input"
                name="password"
                placeholder="Enter Your password"
              />
              {errors.password && touched.password ? (
                <div className="warning">{errors.password}</div>
              ) : null}
              <div className="noti">
                <span></span>You don't have account?
                <Link to="../register">create an account</Link>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Login;
