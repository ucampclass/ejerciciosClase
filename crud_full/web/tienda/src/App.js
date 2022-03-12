import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { UserContext } from "./context/UserContext";
import Shopping from "./components/shopping/Shopping";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [userCtx, setUserCtx] = useState({
    shopping: [],
    user: {},
  });

  return (
    <>
      <UserContext.Provider value={{ userCtx, setUserCtx }}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/shopping">
                <Shopping />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
