import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const [NotEdit, setEdit] = useState(true);
  const handlenewhotle = () => {
    navigate("/admin/addhotels", { state: { NotEdit } });
  };
  const logout = () => {
    localStorage.removeItem("user");
  };
  return (
    <div className="container">
      <h2>Admin Page</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/hotel" className="nav-link">
            Hotels
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/room" className="nav-link">
            Room
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/trans" className="nav-link">
            Transactions
          </Link>
        </li>
        <li className="nav-item">
          <span
            onClick={() => {
              handlenewhotle();
            }}
          >
            <Link to="/admin/addhotels" className="nav-link">
              New hotel
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <Link
            to={`/admin/addroom`}
            state={{ isEdit: false, id: false }}
            className="nav-link"
          >
            New room
          </Link>
        </li>
        <li className="nav-item">
          <a href="/">
            <button
              onClick={() => {
                logout();
              }}
              className="navButton"
            >
              Log out
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
