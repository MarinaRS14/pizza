import React from 'react';
import propTypes from 'prop-types';

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {

  return (
      <div className="categories">
            <ul>
              <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
              {items && 
                items.map((item,index) => (
                  <li 
                  className={activeCategory===index ? 'active' : ''}
                  key={item+index} 
                  onClick={() => onClickCategory(index)}>
                  {item}
                  </li>
              ))}
              
             
            </ul>
      </div>
  )
}) 

Categories.propTypes = {
  //activeCategory: propTypes.oneOf([propTypes.number, null]),
  items: propTypes.arrayOf(propTypes.string).isRequired,
  onClickCategory: propTypes.func,
}
Categories.defaultProps = {activeCategory: null, items: []}

export default Categories;
