import axios from 'axios';

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({data}) => dispatch(setPizzas(data)))
};
 

export const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
};

export const setLoaded = payload => {
    return {
        type: 'SET_LOADED',
        payload
    }
}