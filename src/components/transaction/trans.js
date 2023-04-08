import React, { useState, useEffect } from "react";

const Trans = (data) => {
  // console.log(data.data);
  return (
    <>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>User</th>
              <th>Hotel</th>
              <th>Room</th>
              <th>Date</th>
              <th>Price</th>
              <th>Payment Method </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.data &&
              data.data.map((value, i) => {
                // console.log(value);
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{value.user._id}</td>
                    <td>{value.user.name}</td>
                    <td>{value.hotel.name}</td>
                    <td>{value.rooms.toString()}</td>
                    <td>
                      {value.dateStart} to {value.dateEnd}
                    </td>
                    <td>$ {value.price}</td>
                    <td> {value.payment}</td>
                    <td> {value.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Trans;
