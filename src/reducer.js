export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action)
	switch (action.type){
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}
		case 'ADD_TO_BASKET':
			// add item to basket
			return { 
				...state,
				basket: [...state.basket, action.item]
			};
		case 'REMOVE_FROM_BASKET':
			// remove item from basket

			// clone basket
			let newBasket = [...state.basket];

			// check if product exists in basket
			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

			if (index >= 0){
				// item exists in basket, remove it
				newBasket.splice(index, 1);

			} else {
				console.warn(
					`Can't remove product (id:${action.id} as it is not in the basket)`
				);
			}

			return { 
				...state, 
				basket: newBasket 
			};
		default:
			return state;
	}
};

export default reducer