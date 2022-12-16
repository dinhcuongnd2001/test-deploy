import Container from "react-bootstrap/Container";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCurrUser, getQuantity } from "../../redux/selector";
import userSlice from "../../redux/userSlice";
import { useRef } from "react";
const HeaderComponent = ({ invisibale, setInvisibale }) => {
  const quantity = useSelector(getQuantity);
  const currUser = useSelector(getCurrUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userSlice.actions.resetSession());
    navigate("../");
  };
  const navLinks = [
    { component: "Home", path: "/" },
    { component: "Foods", path: "/foods" },
    { component: "Cart", path: "/cart" },
    { component: "Contact", path: "/contact" },
  ];
  const showMenu = useRef();
  window.onscroll = () => {
    window.scrollY > 50
      ? showMenu?.current.classList.add("show_menu")
      : showMenu?.current.classList.remove("show_menu");
    return () => window.screenY(null);
  };
  return (
    <header>
      <div ref={showMenu}>
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-center justify-content-between">
            <div className="logo text-center">
              <Link to="/" className="link">
                <img
                  className="image"
                  src={require("../../asset/images/logo_1.png")}
                  alt="logo"
                />
                <h5 className="name">Tasty Treat</h5>
              </Link>
            </div>

            <div className="navigation">
              <div className="menu d-flex align-items-center gap-5">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "link active__menu" : "link"
                    }
                  >
                    {item.component}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav_icon">
              {quantity ? <span className="counter">{quantity}</span> : null}

              <ShoppingCartOutlined
                style={{ fontSize: "30px" }}
                onClick={() => setInvisibale(!invisibale)}
              />
              {currUser ? (
                <div className="user">
                  <span className="hello">Hi {currUser.slice(0, 5)} </span>
                  <button
                    onClick={() => handleLogOut()}
                    className="btn btn-register"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="user">
                  <button
                    onClick={() => navigate("../login")}
                    className="btn btn-login"
                  >
                    Log In
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default HeaderComponent;
