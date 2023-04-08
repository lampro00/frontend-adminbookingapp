import React, { useState, useEffect } from "react";
import requests from "../../utils/requests";

import axios from "axios";
import { number } from "prop-types";
const Addhotel = (prop) => {
  console.log(prop);

  const url = `${requests.fecthroom}`;

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const [name, setname] = useState([]);
  const [city, setcity] = useState([]);
  const [price, setprice] = useState([]);
  const [des, setdes] = useState([]);
  const [type, settype] = useState([]);
  const [title, settitle] = useState([]);
  const [room, setroom] = useState([]);
  const [featured, setFeatured] = useState("true");
  const [image, setimage] = useState([]);
  const [distance, setdistanc] = useState([]);
  const [address, setaddress] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:5000/admin/getroom");

      setData(request.data);
      return request;
    }
    fetchData();
  }, [url]);
  useEffect(() => {
    const fetchData3 = async () => {
      const request = await axios.get(
        `http://localhost:5000/admin/getidhotel?id=${prop.id}`
      );

      setData1(request.data[0]);
      setname(request.data[0].name);
      setcity(request.data[0].city);
      setprice(request.data[0].cheapestPrice);
      setdes(request.data[0].desc);
      settype(request.data[0].type);
      settitle(request.data[0].title);
      setFeatured(request.data[0].featured);
      setimage(request.data[0].photos);
      setdistanc(request.data[0].distance);
      setaddress(request.data[0].address);
    };
    prop.id.length !== 0 && fetchData3();
  }, []);
  console.log(prop.id);

  const hadlecheckroom = (e) => {
    const id = e.target.value;
    const a = e.target.checked;
    a ? room.push(id) : room.splice(room.indexOf(id), 1);
    setroom(room);
  };

  const submitHandler = async (e) => {
    if (prop.id.length === 0) {
      console.log("pk");
      await axios({
        method: "post",
        url: `http://localhost:5000${requests.fecthaddhotels}`,
        data: {
          name: name,
          type: type,
          city: city,
          address: address,
          distance: distance,
          photos: image,
          desc: des,
          rating: 5,
          featured: featured,
          rooms: room,
          cheapestPrice: price,
          title: title,
        },
      });
    } else {
      axios({
        method: "post",
        url: `http://localhost:5000${requests.fecthedithotels}?id=${prop.id}`,
        data: {
          name: name,
          title: title,
          type: type,
          city: city,
          address: address,
          distance: distance,
          photos: image,
          desc: des,
          featured: featured,
          rooms: room,
          cheapestPrice: price,
        },
      });
    }
  };
  (function () {
    window.addEventListener(
      "load",
      function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();
  return (
    <div className="container">
      <form
        onSubmit={submitHandler}
        action="/admin/hotel"
        className="needs-validation"
        novalidate
      >
        <div className="form-group">
          <label for="uname">Name</label>
          <input
            type="text"
            className="form-control"
            id="uname"
            placeholder="My hotels"
            name="name"
            required
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={name}
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
          <label for="pwd">City</label>
          <input
            className="form-control"
            id="pwd"
            placeholder="New york"
            name="city"
            onChange={(e) => {
              setcity(e.target.value);
            }}
            value={city}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
          <label for="distance">Distance from City central</label>
          <input
            className="form-control"
            type="number"
            id="distance"
            placeholder="50"
            name="distance"
            onChange={(e) => {
              setdistanc(e.target.value);
            }}
            value={distance}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
          <label for="pwd">Discription</label>
          <input
            className="form-control"
            id="de"
            placeholder="Discription"
            onChange={(e) => {
              setdes(e.target.value);
            }}
            value={des}
            name="desc"
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
          <label for="comment">Image</label>
          <textarea
            class="form-control"
            rows="5"
            id="comment"
            name="photos"
            onChange={(e) => {
              setimage(e.target.value);
            }}
            value={image}
          ></textarea>
        </div>
        <div className="form-group">
          <label for="pwd">Type</label>
          <input
            className="form-control"
            id="pwd"
            placeholder="type"
            name="pswd"
            onChange={(e) => {
              settype(e.target.value);
            }}
            value={type}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
          <label for="pwd">Address</label>
          <input
            className="form-control"
            id="pwd"
            placeholder="Address"
            name="address"
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            value={address}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
          <label for="pwd">Title</label>
          <input
            className="form-control"
            id="pwd"
            placeholder="Title"
            name="title"
            onChange={(e) => {
              settitle(e.target.value);
            }}
            value={title}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
          <label for="price">Price</label>
          <input
            className="form-control"
            id="price"
            type="number"
            placeholder="Price"
            name="price"
            onChange={(e) => {
              setprice(e.target.value);
            }}
            value={price}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group">
          <label for="featured">Featured</label>
          <br></br>
          <select
            onChange={(e) => {
              setFeatured(e.target.value);
            }}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="roomCart_checkbox">
          <h3>Chosse Room</h3>
          {data.map((r) => (
            <div key={r._id}>
              <div class="form-check" key={r}>
                <label className="form-check-label" for="check1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                    name={r._id}
                    onChange={(e) => {
                      hadlecheckroom(e);
                    }}
                    value={r._id}
                  />
                  {r.title}
                </label>
              </div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            //   submitHandler();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addhotel;
