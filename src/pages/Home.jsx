import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup} from '../components'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {sortBy, category} = useSelector(({filters}) => filters);
  
  useEffect(() => {
      dispatch(fetchPizzas(sortBy, category))
  }, [sortBy, category]); 

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch]);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch]);

  const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    {name: 'популярности', type: 'popular',order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
    ];

    const handleAddPizzaToCart = obj => {
      dispatch(addPizzaToCart(obj))
    }
  return (
    <div className="container">
      <div className="content__top">
            <Categories 
              activeCategory={category} 
              items={categoryNames} 
              onClickCategory ={onSelectCategory}
              />
            <SortPopup 
              activeSortType={sortBy.type} 
              items={sortItems} 
              onClickSortType={onSelectSortType}
            />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              {isLoaded ? items.map(item => 
                <PizzaBlock 
                onClickAddPizza={handleAddPizzaToCart} 
                key={item.id}
                addedCount={cartItems[item.id] && cartItems[item.id].items.length} 
                {...item}
                />) 
                : 
                Array(10).fill(0).map((_,index) => <LoadingBlock key={index}/>)}
          </div>
    </div>
  )
}

export default Home