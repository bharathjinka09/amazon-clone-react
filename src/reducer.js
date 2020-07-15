export const initialState = {
	basket: [],
};

function reducer(state, action){
	switch (action.type){
		case 'ADD_TO_BASKET':
			// add item to basket
			break;
		case 'REMOVE_FROM_BASKET':
			// remove item from basket
			break;
		default:
			return state;
	}
}

export default reducer