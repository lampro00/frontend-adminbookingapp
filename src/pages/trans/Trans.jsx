import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/nav/nav";

import axios from "../../utils/axios";
import requests from "../../utils/requests";
import React, { useState, useEffect } from "react";
import Trans from "../../components/transaction/trans";
const Transaction = () => {
  const url = `${requests.fecthtrans}`;

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      console.log(request.data);
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
              <Trans data={data.Trans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
