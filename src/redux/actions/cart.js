export const addPizzaToCart = (pizzaObj) => {
    return {
        type: 'ADD_PIZZA_CART',
        payload: pizzaObj
    }
}
export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
    }
}
export const removeCartItem = (id) => {
    return {
        type: 'REMOVE_CART_ITEM',
        payload: id
    }
}
export const plusItem = (id) => {
    return {
        type: 'PLUS_CART_ITEM',
        payload: id
    }
}
export const minusItem = (id) => {
    return {
        type: 'MINUS_CART_ITEM',
        payload: id
    }
}