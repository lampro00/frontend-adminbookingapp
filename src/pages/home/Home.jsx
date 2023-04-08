import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/nav/nav";
import "./home.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import React, { useState, useEffect } from "react";
import Trans from "../../components/transaction/trans";
const Home = ({ setdata1 }) => {
  const url = `${requests.fecthHomepage}`;

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      console.log(request.data);
      setData(request.data);
      setdata1(request.data);
      return request;
    }
    fetchData();
  }, [url]);

  return (
    <div>
      <Navbar type="home" />

      <div className="homeContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 ">
              <Sidebar />
            </div>
            <div className="col-9 ">
              <div className="card-deck">
                <div className="card bg-primary">
                  <div className="card-body ">
                    <p className="card-text">User</p>
                    <h1>{data.user}</h1>
                  </div>
                </div>
                <div className="card bg-warning">
                  <div className="card-body ">
                    <p className="card-text">Order</p>
                    <h1>{data.order}</h1>
                  </div>
                </div>
                <div className="card bg-success">
                  <div className="card-body ">
                    <p className="card-text">Earnings</p>
                    <h1>{data.earnings}</h1>
                  </div>
                </div>
                <div className="card bg-success">
                  <div className="card-body ">
                    <p className="card-text">Blance</p>
                    <h1>{data.blance}</h1>
                  </div>
                </div>
              </div>

              <Trans data={data.Trans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
