import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage";
import { useState, useEffect } from "react";
import "./styles.css";
import BookBrowse from "./components/BookBrowse";
import Navbar from "./components/Navbar";
import LoginForm from "./forms/LoginForm";
import Sale from "./components/Sale";
import OrderDetail from "./components/OrderDetail";

function App() {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    if (user) {
      // No need to navigate here, the Routes component handles it
    }
  }, [user]);

  return (
    <Router>
      <div className="white">
        {user ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/allBooks" element={<BookBrowse />} />
              <Route path="/cart" element={<OrderDetail />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/" element={<Navigate to="/sale" />} /> {/* Redirect root to Sale */}
              <Route path="*" element={<Navigate to="/sale" />} /> {/* Catch-all route */}
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect all other paths to login */}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;



