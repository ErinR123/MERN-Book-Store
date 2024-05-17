import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage";
import { useState } from "react";
import "./styles.css";
import BookBrowse from "./components/BookBrowse";
import Navbar from "./components/Navbar";
import LoginForm from "./forms/LoginForm";
import Sale from "./components/Sale";
import OrderDetail from "./components/OrderDetail";
// import staffPicks from "../public/staffPicks.jpg"

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="white">
      {" "}
      {user ? (
        <Router>
          <div>
            <Navbar />
            {/* <img src={staffPicks} alt="staffpicks" /> */}
            <Routes>
              <Route path="/allBooks" element={<BookBrowse />} />
              <Route path="/cart" element={<OrderDetail />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/sale" element={<Sale/>} />
            </Routes>
          </div>
        </Router>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
};

export default App;
