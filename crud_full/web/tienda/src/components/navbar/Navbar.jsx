import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getToken } from "../../helpers/user";

const Navbar = () => {
  const { userCtx } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getToken());
  }, []);

  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CP
        </Link>
        <div className="d-flex">
          {user === null ? null : (
            <Link className="btn btn-dark" to="/dashboard">
              Dashboard
            </Link>
          )}
          <Link className="btn btn-dark" to="/shopping">
            Carrito {userCtx.shopping.length}
          </Link>
          <Link className="btn btn-dark" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
