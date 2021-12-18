import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Contacto } from './components/Contacto';
import { Inicio } from './components/Inicio';
import { Navbar } from './components/Navbar';
import { Nosotros } from './components/Nosotros';
import { Producto } from './components/Producto';
import { Login } from './components/Login';
import { Detalle } from './components/Detalle';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/detalle/:id'>
            <Detalle />
          </Route>
          <Route path='/producto'>
            <Producto />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/nosotros'>
            <Nosotros />
          </Route>
          <Route path='/contacto'>
            <Contacto />
          </Route>
          <Route path='/'>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Producto
// Login
