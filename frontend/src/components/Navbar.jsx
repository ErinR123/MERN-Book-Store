import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo2 from "../../public/logo2.jpg";
import * as userService from "../utilities/users-service";


function handleLogOut() {
  userService.logOut();

  setUser(null);
}

export default function Navbar() {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo2} alt="Logo" className="h-10 mr-2" />{" "}
          <div
            className="text-black font-semibold text-lg underline"
            style={{ fontFamily: "Pacifico, cursive", fontSize: "1.5rem" }}
          >
            PlotPoint Books.
          </div>
        </div>
        <div className="flex">
          <Link to="/allBooks" className="text-black font-bold mr-4">
            Bookstore
          </Link>
          <Link
            to=""
            className="text-black font-bold mr-4"
            onClick={handleLogOut}
          >
            Log Out
          </Link>
          <Link to="/sale" className="text-black font-bold mr-4">
            Sale
          </Link>
          <span className="text-black font-bold mr-4">Events</span>
          <span className="text-black font-bold mr-4">About</span>
          <span className="text-black font-bold mr-4">Contact</span>
          <Link to="/cart" className="text-black font-bold mr-4">
            <FaShoppingCart className="text-black" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
