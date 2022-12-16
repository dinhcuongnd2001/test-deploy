import React, { useState, useEffect } from "react";
import SessionFood from "../sessionFood/SessionFood";
import Container from "react-bootstrap/Container";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getFoodsByMulSelection,
  getCategory,
  getTypeCostFood,
  getNameFood,
} from "../../redux/selector";
import filterSilce from "../../redux/filterSlice";
import Page404 from "../page404/Page404";
import ProductComponent from "../productComponent/ProductComponent";
import "./product.scss";

function Products() {
  const dispatch = useDispatch();
  const allFoodsName = useSelector(getFoodsByMulSelection);
  const CurrCatrgory = useSelector(getCategory);
  const CurrtypeCost = useSelector(getTypeCostFood);
  const currSearch = useSelector(getNameFood);
  const [category, setCategory] = useState(CurrCatrgory);
  const [typeCost, setTypeCost] = useState(CurrtypeCost);
  const [search, setSearch] = useState(currSearch);
  const handleChange = (e) => {
    dispatch(filterSilce.actions.byName(e.target.value));
    setSearch(e.target.value);
  };

  const changeCategory = (e) => {
    dispatch(filterSilce.actions.byCategory(e.target.value));
    setCategory(e.target.value);
  };

  const handleTypeCost = (e) => {
    dispatch(filterSilce.actions.byTypeCost(e.target.value));
    setTypeCost(e.target.value);
  };

  return (
    <div>
      <SessionFood title="All Foods" />
      <Container>
        <div className="content">
          <div className="filter">
            <div className="search">
              <input
                value={search}
                onChange={(e) => handleChange(e)}
                type="text"
                className="input"
                placeholder="I'm looking for"
              />
              <SearchOutlined />
            </div>

            <div className="Category">
              <label for="">Category:</label>
              <select
                className=""
                name=""
                id=""
                value={category}
                onChange={(e) => changeCategory(e)}
              >
                <option value="All">All</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Bread">Bread</option>
              </select>
            </div>

            <div className="Price">
              <label for="">Sort by:</label>

              <select
                name=""
                id=""
                value={typeCost}
                onChange={(e) => handleTypeCost(e)}
              >
                <option value="Default">Default</option>
                <option value="High">High to Low</option>
                <option value="Low">Low to High</option>
              </select>
            </div>
          </div>
          <div className="product">
            {allFoodsName.length > 0 ? (
              allFoodsName.map((food) => (
                <ProductComponent food={food} key={food.id} />
              ))
            ) : (
              <Page404 />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Products;
