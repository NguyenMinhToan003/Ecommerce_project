import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		list: localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [],
	},
	reducers: {
		addCartItem: (state, action) => {
			if (action.payload.index !== -1) {
				let newList = state.list;
				newList[action.payload.index] = action.payload.data;
			} else state.list = [...state.list, action.payload.data];
			localStorage.setItem('cart', JSON.stringify(state.list));
		},
		removeCartItem: (state, action) => {
			state.list = state.list.filter((item, index) => index !== action.payload);
			localStorage.setItem('cart', JSON.stringify(state.list));
		},
		resetCartStore: (state) => {
			state.list = [];
			localStorage.setItem('cart', JSON.stringify(state.list));
		},
	},
});

// Action creators are generated htmlFor each case reducer function
export const {
	addCartItem,
	removeCartItem,
	resetCartStore,
} = cartSlice.actions;

export default cartSlice.reducer;
