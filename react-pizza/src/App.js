import React from 'react';
// import {fetchPizzas} from './redux/actions/pizzas'
import {useDispatch} from 'react-redux'

// import logo from './logo.svg';
// import './App.css';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App(){

    // console.log(window.store.getState())
    // console.log(items)

    return(
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component = {Home} exact />
                <Route path="/cart" component={Cart} exact />
            </div>
        </div>
    )
}

export default App


// const mapStateToProps = state => {
//     return {
//         items: state.pizzas.items,
//         filters: state.filters
//     }
// }
//
// const mpDispatchToProps = dispatch =>{
//     return {
//         setPizzas: (items)=> dispatch(setPizzasAction(items)), dispatch
//     }
// }

//
// export default connect(mapStateToProps, mpDispatchToProps)(App);
