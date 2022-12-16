import "./App.css";
import { useState, useEffect } from "react";
import Main from "./layout/main/Main";

import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "./redux/manageSlice";
import { getStatus, getAllFoods } from "./redux/selector";
function App() {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const foods = useSelector(getAllFoods);
  const status = useSelector(getStatus);
  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  return <>{status == "loading" ? <h1>Loading</h1> : <Main />}</>;
}

export default App;
