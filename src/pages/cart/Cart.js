import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/selector";
import SessionFood from "../../components/sessionFood/SessionFood";
import { DeleteOutlined } from "@ant-design/icons";
import "./cart.scss";
import { useNavigate } from "react-router-dom";
import userSlice from "../../redux/userSlice";
function Cart() {
  const userCart = useSelector(getCart);
  // console.log("your cart: ", userCart);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hanldeClick = () => {
    navigate("../foods");
  };
  const handleChangePage = () => {
    navigate("../checkout");
  };

  const handleDelete = (product) => {
    dispatch(userSlice.actions.removeProduct(product));
  };
  useEffect(() => {
    const totalPrice = userCart.reduce(
      (result, curr) => (result += curr.price * curr.count),
      0
    );
    setTotal(totalPrice);
  }, [userCart]);
  return (
    <>
      <SessionFood title="Your Cart" />
      <Container>
        <div className="cart">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Product Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>
              {userCart.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      className="image"
                      src={require(`../../asset/images/${item.image01}`)}
                      alt=""
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>
                    <DeleteOutlined
                      onClick={() => handleDelete(item)}
                      className="icon"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h6 className="cost">
            Total : <span className="custom">${total}</span>
          </h6>
          <button onClick={hanldeClick} className="button">
            Continue To Shopping
          </button>
          <button onClick={handleChangePage} className="button">
            Check out
          </button>
        </div>
      </Container>
    </>
  );
}

export default Cart;
