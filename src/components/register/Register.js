import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getListUser } from "../../redux/selector";
import userSlice from "../../redux/userSlice";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
function Register() {
  //
  const listUser = useSelector(getListUser);
  console.log(listUser);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "", repassword: "" });
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This Field is required").email(),
    password: Yup.string().required("This Field is required"),
    repassword: Yup.string().required("This Field is required"),
  });

  // console.log(listUser);
  const handleSubmit = ({ email, password, repassword }) => {
    if (repassword !== password) {
      alert("Re-Password is not true");
    }
    const check = listUser.some((user) => user.userName == email);
    if (check) {
      alert("The Username is already existed");
    } else {
      alert("Register success! Let's login");
      dispatch(
        userSlice.actions.createNewMember({
          userName: email,
          password: password,
        })
      );
      navigate("../login");
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
              <h6 style={{ marginTop: "5px", marginBottom: "0" }}>Register</h6>
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

              <Field
                type="password"
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                value={form.repassword}
                className="input"
                name="repassword"
                placeholder="Enter Your repassword"
              />
              {errors.repassword && touched.repassword ? (
                <div className="warning">{errors.repassword}</div>
              ) : null}

              <button type="submit" className="btn">
                Register
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Register;
