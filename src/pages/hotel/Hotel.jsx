import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/nav/nav";
// import "./home.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import React, { useState, useEffect } from "react";
import HOtels from "../../components/hotels/hotels";
import { Link } from "react-router-dom";
const Hotel = ({ setedit, setidhotel }) => {
  const url = `${requests.fecthHotel}`;
  // setedit(edit);
  const [data, setData] = useState([]);
  const [edit, setedit2] = useState([]);
  console.log(edit);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      // console.log(request.data);
      setData(request.data);
      return request;
    }
    fetchData();
  }, [url]);
  const callback = (a, b) => {
    console.log(a, b);
    setedit(a);
    setidhotel(b);
  };
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
              <h1>Hotels List </h1>
              <Link to="/admin/addhotels">Add new hotel</Link>
              <HOtels datahotels={data} setedit2={callback} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
