import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import APIUser from "./pages/APIUser/APIUser";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <div className="appWrapper">
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/APIUser" element={<APIUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;