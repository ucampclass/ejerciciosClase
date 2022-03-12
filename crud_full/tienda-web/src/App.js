import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Carrito from "./components/carrito/Carrito";
import Login from "./components/login/Login";
import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState({
    shopping: [],
  });

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/carrito">
                <Carrito />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
