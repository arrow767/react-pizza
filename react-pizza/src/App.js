import React from 'react';
import axios from 'axios';
import {setPizzas} from './redux/actions/pizzas'
import {useSelector, useDispatch} from 'react-redux'

// import logo from './logo.svg';
// import './App.css';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App(){
    const dispatch = useDispatch()
    const {items} = useSelector(({pizzas, filters}) => {
        return({
            items: pizzas.items,
            sortBy: filters.sortBy
        })

    })
    console.log(window.store.getState())
    console.log(items)
    React.useEffect(()=> {
            axios.get('http://localhost:3000/db.json').then(({ data }) => {
                dispatch(setPizzas(data.pizzas))
            });
    },[])
    return(
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" render={() => <Home items={items} />} exact />
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
