import React from 'react';

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

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  // const [count, setCount] = React.useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
    // setCount((num) => num + 1)
    // console.log(setCount);
  };

  // const state = React.useState(null)
  // const activeItem = state[0]
  // const setActiveItem = state[1]
  // console.log(state);

  return (
      <div className="categories">
        <ul>
          {/* <h3>{count}</h3> */}
          <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>
            Все
          </li>
          {items &&
          items.map((name, index) => (
              <li
                  className={activeItem === index ? 'active' : ''}
                  onClick={() => onSelectItem(index)}
                  key={`${name}_${index}`}>
                {name}
              </li>
          ))}
        </ul>
      </div>
  );
})

export default Categories;
