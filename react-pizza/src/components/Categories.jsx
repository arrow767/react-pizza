import React from 'react';
import PropTypes from "prop-types";
import PizzaBlock from "./PizzaBlock";

// Пример: классовый компонент
// class Categories extends React.Component {
//   state = {
//     activeItem: null,
//     test: 123,
//   }

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index,
//     })
//   }

//   render(){
//     const {items, onClickItem} = this.props;

//     return(
//           <div className="categories">
//       <ul>
//         <li>Все</li>
//         {items.map((name, index)=> (
//         <li
//         className={this.state.activeItem === index ? 'active' : ''}
//         onClick = {() => this.onSelectItem(index)}
//         key={`${name}_${index}`}>{name}
//         </li>
//         ))}
//       </ul>
//     </div>
//     )
//   }
// }

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {
  const [activeItem, setActiveItem] = React.useState(null);

  // const [count, setCount] = React.useState(null)



  // const state = React.useState(null)
  // const activeItem = state[0]
  // const setActiveItem = state[1]
  // console.log(state);

  return (
      <div className="categories">
        <ul>
          {/* <h3>{count}</h3> */}
          <li onClick={() => onClickCategory(null)} className={activeCategory === null ? 'active' : ''}>
            Все
          </li>
          {items &&
          items.map((name, index) => (
              <li
                  className={activeCategory === index ? 'active' : ''}
                  onClick={() => onClickCategory(index)}
                  key={`${name}_${index}`}>
                {name}
              </li>
          ))}
        </ul>
      </div>
  );
})

Categories.protoTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
    activeCategory: null,
    items:[]
};

export default Categories;
