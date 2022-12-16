import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllFoods } from "../../redux/selector";
import "./Manager.scss";
function Manager() {
  const food = useSelector(getAllFoods);
  return (
    <div className="manager">
      <Container>
        <button className="btn btn-success">Add</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="listproduct">
            {food.map((item, index) => (
              <tr className={item.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={require(`../../asset/images/${item.image01}`)}
                    alt=""
                    className="img"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.desc.slice(1, 100)} ...</td>
                <td>
                  <button className="btn btn-success">Update</button>
                </td>
                <td>
                  <button className="btn btn-warning">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Manager;
