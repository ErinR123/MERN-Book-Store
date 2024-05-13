import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage";
import bookImage2 from "../public/images/bookImage2.jpg";
import { useState } from "react";
import "./styles.css";
import BookBrowse from "./components/BookBrowse";
import Navbar from "./components/Navbar";
import LoginForm from "./forms/LoginForm";
import Home from "./components/Home";

// Updated import statement
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  console.log(user)

  return (
    <>
      
      { user ?
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/allBooks" element={<BookBrowse />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
        :
        <AuthPage setUser={setUser} />
      }
    </>
  );
}

export default App;
