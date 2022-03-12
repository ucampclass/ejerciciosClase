import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { setToken } from "../../helpers/user";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setError("El email es requerido");

      return;
    }

    if (password.trim() === "") {
      setError("El password es requerido");

      return;
    }

    setError(null);
    setToken({ nombre: "Daniel" });
    props.history.push("/dashboard");
  };

  return (
    <div className="mt-4">
      <h3 className="text-center">Iniciar sesión</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          {error === null ? null : (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form>
            <input
              type="text"
              placeholder="Correo"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mt-3"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-dark" type="button" onClick={login}>
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
