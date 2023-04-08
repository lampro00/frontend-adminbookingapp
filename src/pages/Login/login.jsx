import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { redirect } from "react-router-dom";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import { useNavigate } from "react-router-dom";

import "./login.css";
const Login = ({ setuser2 }) => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [user1, setuser1] = useState("");
  const [pass1, setpass1] = useState("");
  const [login, setlogin] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  async function fetchData(url) {
    const request = await axios.get(url);
    console.log(request.data.data[0]);
    setData(request.data.data[0]);
    if (!request.data.data[0].isAdmin) {
      alert("sai tài khoản admin");
    }

    return request;
  }
  if (data.isAdmin) {
    localStorage.setItem("user", data.username);
    setuser2(data);
    navigate("/");
  }
  // After your login action you can redirect with this command:

  const handlelogin = async (e) => {
    e.preventDefault();
    setuser(user1);
    setpass(pass1);
    const url = `${requests.fecthlogin}?userName=${user}&password=${pass}`;
    fetchData(url);
    // history.push("/");
  };
  const resetSearch = () => {
    setuser("");
    setpass("");
  };
  console.log(data);

  // }
  return (
    <div>
      <Navbar type="login" />
      <form onSubmit={handlelogin}>
        <div className="inner-form">
          <div className="basic-search">
            <div className="input-field">
              <h1>Login</h1> <br></br>
              <input
                className="input"
                type="text"
                placeholder="UserName"
                onChange={(e) => setuser1(e.target.value)}
                value={user1}
              />
              <input
                className="input"
                type="password"
                placeholder="password"
                onChange={(e) => setpass1(e.target.value)}
                value={pass1}
              />
              <button
                className="btn-search"
                type="submit"
                // onClick={() => handlelogin()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <Loginresult user={user} Pass={pass} /> */}
    </div>
  );
};

export default Login;
