import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && !user) {
      try {
        const data = JSON.parse(storedUser);
        setUser(data);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-300 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <NavLink to="/" className="hover:text-yellow-300">
            MovieZone 🎬
          </NavLink>
        </div>
        <nav className="flex space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/user"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
                }
              >
                {user.name}
              </NavLink>
              <button onClick={handleLogout} className="hover:text-yellow-300">
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
              }
            >
              Sign In
            </NavLink>
          )}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
