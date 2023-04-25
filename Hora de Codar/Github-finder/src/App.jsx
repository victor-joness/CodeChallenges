import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import UserProfile from "./UserProfile/UserProfile";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/user" element={<UserProfile></UserProfile>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
