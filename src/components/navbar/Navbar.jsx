import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = (type, data) => {
  // console.log(type);
  // type.data && console.log(type.data.data.data);
  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking Website</span>
        <div className="navItems">
          .
          {type.type === "login" && (
            <>
              <a href="/register">
                <button className="navButton">Register</button>
              </a>
              {/* <a href="/login">
                <button className="navButton">Login</button>
              </a> */}
            </>
          )}
          {type.type === "home" && (
            <>
              {/* {type.data.data.length !== 0 && (
                <span className="logo">{type.data.data.data[0].email}</span>
              )} */}
              {/* <Link to={`/transaction/${type.data.data.data[0]._id}`}>
                <button className="navButton">Trascition</button>
              </Link> */}
              <a href="/">
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="navButton"
                >
                  logout
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
