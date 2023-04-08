import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/nav/nav";
// import "./home.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import React, { useState, useEffect } from "react";
import Addroom from "../../components/room/addroom";
import { Link, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Addrooms = (prop) => {
  const url = `${requests.fecthHotel}`;
  let { state } = useLocation();
  console.log(state);

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
              <h1>Add New Room </h1>
              <Addroom isEdit={state.isEdit} id={state.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addrooms;
