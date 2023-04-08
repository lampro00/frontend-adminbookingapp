import React, { useState, useEffect } from "react";
import requests from "../../utils/requests";
import axios from "axios";

import { Link } from "react-router-dom";
const HOtels = (data) => {
  const [data1, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const submitHandler = (a) => {
    let isExecuted = window.confirm("Bạn có chắc chắn muốn xóa?");
    if (isExecuted) {
      async function fetchData(ab) {
        const request = await axios.get(
          `http://localhost:5000${requests.fecthDeletehotel}?id=${ab}`
        );
        setData(request.data.message);
        console.log(request.data.message.toString());
        console.log(request.data.message.toString() === "ok");
        if (request.data.message.toString() === "ok") {
          alert("Đã xóa thành công");
          window.location.reload();
        } else alert("Đã có khách đặt khách sạn này");
        return request;
      }
      fetchData(a);
    }
  };
  const submitEdit = (a, b) => {
    data.setedit2(a, b);
  };
  return (
    <>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Title</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.datahotels &&
              data.datahotels.map((value, i) => {
                return (
                  <tr key={value._id}>
                    <td>{i + 1}</td>
                    <td>{value._id}</td>
                    <td>{value.name}</td>
                    <td>{value.type}</td>
                    <td>{value.title}</td>
                    <td>{value.city}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          submitHandler(value._id);
                        }}
                      >
                        {/* <a href="/admin/hotel">Delete</a> */}
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          submitEdit(true, value._id);
                        }}
                      >
                        <Link to="/admin/addhotels">Edit</Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HOtels;
