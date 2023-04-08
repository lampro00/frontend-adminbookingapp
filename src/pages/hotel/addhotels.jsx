import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/nav/nav";
// import "./home.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import React, { useState, useEffect } from "react";
import Addhotel from "../../components/hotels/addhotels";
import { Link } from "react-router-dom";
const Addhotels = (datahome) => {
  const url = `${requests.fecthHotel}`;
  console.log(datahome.datahome);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(url);
  //     console.log(request.data);
  //     setData(request.data);
  //     return request;
  //   }
  //   fetchData();
  // }, [url]);

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
              <h1>Add New Hotels </h1>
              <Addhotel isEdit={datahome.isEdit} id={datahome.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addhotels;
