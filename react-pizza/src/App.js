import React from 'react';
import axios from 'axios';
import store from './redux/store'
import {setPizzas as setPizzasAction} from './redux/actions/pizzas'
import {connect} from 'react-redux'

// import logo from './logo.svg';
// import './App.css';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

// function App() {
//
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//     // fetch('http://localhost:3000/db.json')
//     //   .then((resp) => resp.json())
//     //   .then((json) => {
//     //     setPizzas(json.pizzas);
//     //   });
//   }, []);
//
//
//   return
// }

class App extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            this.props.setPizzas(data.pizzas)
    });
    }

    render(){
        console.log(this.props)
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" render={() => <Home items={this.props.items} />} exact />
                    <Route path="/cart" component={Cart} exact />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items,
        filters: state.filters
    }
}

const mpDispatchToProps = dispatch =>{
    return {
        setPizzas: (items)=> dispatch(setPizzasAction(items)), dispatch
    }
}


export default connect(mapStateToProps, mpDispatchToProps)(App);
