import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import requests from "../../utils/requests";
import axios from "axios";

import { Link } from "react-router-dom";
const Room = (data) => {
  const [data1, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const Navigate = useNavigate();
  const submitHandler = (e, a) => {
    let isExecuted = window.confirm("Bạn có chắc chắn muốn xóa?");
    if (isExecuted) {
      async function fetchData(ab) {
        const request = await axios.get(
          `http://localhost:5000/admin/deleteroom?id=${ab}`
        );
        setData(request.data.message);
        console.log(request.data.message.toString());
        console.log(request.data.message.toString() === "ok");
        if (request.data.message.toString() === "ok") {
          alert("Đã xóa thành công");
        } else alert("Đã có khách đặt khách sạn này");
        return request;
      }
      fetchData(a);
      navigator("/admin/addroom");
      e.preventDefault();
    }
    e.preventDefault();
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
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Max People</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.datarooms &&
              data.datarooms.map((value, i) => {
                return (
                  <tr key={value._id}>
                    <td>{i + 1}</td>
                    <td>{value._id}</td>
                    <td>{value.title}</td>
                    <td>{value.desc}</td>
                    <td>{value.price}</td>
                    <td>{value.maxPeople}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => {
                          submitHandler(e, value._id);
                          setData2(value._id);
                        }}
                      >
                        <a href="/admin/room">Delete</a>
                        {/* delete */}
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => {
                          submitEdit(true, value._id);
                        }}
                      >
                        <Link
                          to={`/admin/addroom`}
                          state={{ isEdit: true, id: value._id }}
                        >
                          edit
                        </Link>
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

export default Room;
