import React, { useState } from "react";
import "./Checkout.scss";
import SessionFood from "../../components/sessionFood/SessionFood";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../redux/userSlice";
import { getCart } from "../../redux/selector";
function Checkout() {
  const dispatch = useDispatch();
  // const [shiping, setShipping] = useState(0);
  const shipping = 5;
  const currCart = useSelector(getCart);
  const subtotal = currCart.reduce(
    (res, curr) => (res += curr.count * curr.price),
    0
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    postalCode: "",
  });

  const validate = Yup.object().shape({
    name: Yup.string().required("This field is required! "),
    email: Yup.string()
      .required("This field is required! ")
      .email("this field must be email"),
    phone: Yup.string()
      .required("This field is required! ")
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone is not true"),
    country: Yup.string().required("This field is required!"),
    city: Yup.string().required("This field is required!"),
    postalCode: Yup.string().required("This field is required!"),
  });

  const handleSubmit = (value) => {
    alert(`Success! Name : ${value.name}`);
    setForm({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      postalCode: "",
    });
    dispatch(userSlice.actions.checkout());
  };

  return (
    <>
      <SessionFood title="Checkout"></SessionFood>
      <Container>
        <div className="checkout">
          <div className="checkout-form">
            <h6 className="title">Shipping Address</h6>
            <Formik
              initialValues={form}
              enableReinitialize="true"
              validationSchema={validate}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ errors, touched }) => (
                <Form className="form">
                  <div class="form-floating typing">
                    <Field
                      id="floatingInput"
                      className="form-control input"
                      placeholder="your name"
                      name="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, [e.target.name]: e.target.value })
                      }
                    />
                    <label for="floatingInput">Your Name</label>
                    {errors.name && touched.name ? (
                      <div className="warning">{errors.name}</div>
                    ) : null}
                  </div>

                  <div class="form-floating typing">
                    <Field
                      id="floatingEmail"
                      placeholder="Enter your email"
                      className="form-control input"
                      name="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, [e.target.name]: e.target.value })
                      }
                    />
                    <label for="floatingEmail">Your Email</label>

                    {errors.email && touched.email ? (
                      <div className="warning">{errors.email}</div>
                    ) : null}
                  </div>

                  <div class="form-floating typing">
                    <Field
                      placeholder="Phone Number"
                      className="input form-control"
                      id="floatingPhone"
                      name="phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, [e.target.name]: e.target.value })
                      }
                    />
                    <label for="floatingPhone">Your phone</label>

                    {errors.phone && touched.phone ? (
                      <div className="warning">{errors.phone}</div>
                    ) : null}
                  </div>

                  <div class="form-floating typing">
                    <Field
                      placeholder="Your Country"
                      id="floatingCountry"
                      className="input form-control"
                      name="country"
                      value={form.country}
                      onChange={(e) =>
                        setForm({ ...form, [e.target.name]: e.target.value })
                      }
                    />
                    <label for="floatingCountry">Country</label>
                    {errors.country && touched.country ? (
                      <div className="warning">{errors.country}</div>
                    ) : null}
                  </div>

                  <div class="form-floating typing">
                    <Field
                      placeholder="Your City"
                      className="input form-control"
                      id="floatingCity"
                      name="city"
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, [e.target.name]: e.target.value })
                      }
                    />
                    <label for="floatingCity">City</label>
                    {errors.city && touched.city ? (
                      <div className="warning">{errors.city}</div>
                    ) : null}
                  </div>

                  <div class="form-floating typing">
                    <Field
                      placeholder="ZIP Code"
                      id="floatingZip"
                      className="input form-control"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <label for="floatingZip">Zip code</label>
                    {errors.postalCode && touched.postalCode ? (
                      <div className="warning">{errors.postalCode}</div>
                    ) : null}
                  </div>

                  <button className="submit" type="submit">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="detail">
            <h4 className="subtotal">
              <span className="sub-title">Subtotal :</span>{" "}
              <span className="custom">${subtotal}</span>
            </h4>
            <h4 className="shipping">
              <span className="sub-title">Shipping :</span>{" "}
              <span className="custom">${shipping}</span>
            </h4>
            <h4 className="tax">
              <span className="sub-title">Tax :</span>{" "}
              <span className="custom">${(subtotal * 8) / 100} </span>
            </h4>
            <h3 className="total">
              <span className="sub-title">Total :</span>{" "}
              <span className="custom">
                ${subtotal + shipping + (subtotal * 8) / 100}
              </span>
            </h3>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
