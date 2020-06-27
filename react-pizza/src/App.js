import React from 'react';

// import logo from './logo.svg';
// import './App.css';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  // const clickPoKnopke = () => {
  //   alert('Hello!');
  // };

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
