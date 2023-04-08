import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Addhotels from "./pages/hotel/addhotels";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Rooms from "./pages/room/Room";
import Addrooms from "./pages/room/addroom";
import Transaction from "./pages/trans/Trans";
import Login from "./pages/Login/login";
// import Book from "./components/book/book";
function App() {
  const [user, setuser2] = useState([]);
  const [data1, setdata1] = useState([]);
  const [Edit, setedit] = useState([]);
  const [id, setidhotel] = useState([]);
  const [Editr, seteditr] = useState([]);
  const [idr, setidroom] = useState([]);
  console.log(Editr);
  console.log(idr);
  console.log(user);
  var name = localStorage.getItem("user");
  console.log(name);
  if (user.length === 0 && name === null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setuser2={setuser2} />} />;
          <Route path="/admin/login" element={<Login setuser2={setuser2} />} />;
          <Route render={() => <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  } else
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setdata1={setdata1} />} />
          <Route
            path="/admin/hotel"
            element={<Hotel setedit={setedit} setidhotel={setidhotel} />}
          />
          <Route
            path="/admin/addhotels"
            element={<Addhotels isEdit={Edit} id={id} />}
          />
          <Route
            path="/admin/room"
            element={<Rooms seteditr={seteditr} setidroom={setidroom} />}
          />
          <Route path={`/admin/addroom`} element={<Addrooms />} />
          <Route path="/admin/trans" element={<Transaction />} />
          <Route render={() => <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
