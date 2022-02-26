import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Productos } from './components/Productos/Productos';

import { UserContext } from './context/UserContext';

function App() {
  const [user, setUser] = useState({
    nombre: 'Pedro',
    edad: 34,
    sexo: 'M',
    status: 'activo',
  });

  return (
    <div className='container'>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/nosotros'>
              <Nosotros />
            </Route>
            <Route path='/productos'>
              <Productos />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
