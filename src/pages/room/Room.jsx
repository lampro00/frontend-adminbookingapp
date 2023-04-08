import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/nav/nav";
// import "./home.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import React, { useState, useEffect } from "react";
import Room from "../../components/room/room";
import { Link } from "react-router-dom";
const Rooms = ({ seteditr, setidroom }) => {
  const url = `${requests.fecthroom}`;

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      // console.log(request.data);
      setData(request.data);
      return request;
    }
    fetchData();
  }, [url]);

  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 ">
              <Sidebar />
            </div>
            <div className="col-9 ">
              <h1>Rooms List </h1>
              <Link to={`/admin/addroom`} state={{ isEdit: false, id: false }}>
                Add new room
              </Link>
              <Room datarooms={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
