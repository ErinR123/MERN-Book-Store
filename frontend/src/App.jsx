import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage";
import { useState } from "react";
import "./styles.css";
import BookBrowse from "./components/BookBrowse";
import Navbar from "./components/Navbar";
import LoginForm from "./forms/LoginForm";
import Sale from "./components/Sale";
import bannerImage from "../public/bannerImage.jpg";
import OrderDetail from "./components/OrderDetail";
// import Bookdetail from './components/Bookdetail';



function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="white">
      {" "}
      {/* Use Tailwind CSS yellow-100 color */}
      {user ? (
        <Router>
          <div>
            <Navbar />
            <div className="relative">
              <div className="flex-grow flex items-center justify-center bg-white px-10">
                <img
                  src={bannerImage}
                  alt="Book Banner"
                  className="w-full h-auto max-h-80"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <p className="text-white text-2xl font-bold"></p>
              </div>
            </div>
            {/* <Sale /> */}
            <Routes>
            
              {/* <Route path="/book/:id" element={<Bookdetail />} /> */}
              <Route path="/allBooks" element={<BookBrowse />} />
              <Route path="/cart" element={<OrderDetail />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </div>
        </Router>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;

// { user ?
//   <Router>
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/allBooks" element={<BookBrowse />} />
//         <Route path="/login" element={<LoginForm />} />
//       </Routes>
//     </div>
//   </Router>
//     :
//     <AuthPage setUser={setUser} />
//   }
