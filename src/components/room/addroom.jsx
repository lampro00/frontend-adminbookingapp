import React, { useState, useEffect } from "react";
import requests from "../../utils/requests";
import axios from "axios";
const Addroom = (prop) => {
  const url = `${requests.fecthHotel}`;
  const isEdit = prop.isEdit;
  const id = prop.id;

  const [data, setData] = useState([]);

  const [price, setprice] = useState([]);
  const [des, setdes] = useState([]);

  const [title, settitle] = useState([]);
  const [roomNumbers, setroom] = useState([]);

  const [maxpeople, setmaxpeople] = useState([]);
  const [hotels, sethotels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:5000/admin/hotels");
      console.log(request);
      setData(request.data);
      return request;
    }
    fetchData();
  }, [url]);
  useEffect(() => {
    async function fetchData3() {
      const request = await axios.get(
        `http://localhost:5000/admin/getIdroom?id=${id}`
      );

      setprice(request.data[0].price);
      setdes(request.data[0].desc);
      settitle(request.data[0].title);
      setroom(request.data[0].roomNumbers);
      roomNumbers.toString();
      setmaxpeople(request.data[0].maxpeople);
      return request;
    }
    isEdit && fetchData3();
  }, []);

  const hadlecheckroom = (e) => {
    const id = e.target.value;
    const a = e.target.checked;
    a ? hotels.push(id) : hotels.splice(hotels.indexOf(id), 1);
    sethotels(hotels);
  };
  const submitHandler = async (e) => {
    if (!isEdit) {
      await axios.post("http://localhost:5000/admin/addrom", {
        data: {
          title: title,
          maxpeople: maxpeople,
          roomNumbers: roomNumbers,
          price: price,
          desc: des,
          hotels: hotels,
        },
      });
    } else {
      await axios.post(`http://localhost:5000/admin/posteditroom?id=${id}`, {
        title: title,
        maxpeople: maxpeople,
        roomNumbers: roomNumbers,
        price: price,
        desc: des,
        hotels: hotels,
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
  const print = () => {
    let arrayValues = document.getElementById("arrvalues").value;
    let splittedValues = arrayValues.split(",");
    const resultString = [];

    for (let i = 0; i < splittedValues.length; i++) {
      resultString.push(splittedValues[i]);
    }
    setroom(resultString);
  };

  return (
    <div className="container">
      <form
        onSubmit={submitHandler}
        action="/admin/room"
        className="needs-validation"
        novalidate
      >
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
          <label for="maxpeople">maxpeople </label>
          <input
            className="form-control"
            type="number"
            id="maxpeople"
            placeholder="50"
            name="maxpeople"
            onChange={(e) => {
              setmaxpeople(e.target.value);
            }}
            value={maxpeople}
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
          <label for="room">Room </label>
          <input
            type="text"
            id="arrvalues"
            value={roomNumbers}
            onChange={(e) => {
              setroom(e.target.value);
            }}
          />
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

        <div className="roomCart_checkbox">
          <h3>Chosse hotels</h3>
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
            print();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addroom;
