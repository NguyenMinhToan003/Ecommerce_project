import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	list: localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem: (state, action) => {
			const { index, data } = action.payload;
			if (data.quantity <= 0) return;

			const item = state.list.find(
				(item) =>
					item.id === data.id &&
					item.color === data.color &&
					item.size === data.size
			);
			if (item) {
				item.quantity = data.quantity;
			} else {
				state.list.push(data);
			}
			localStorage.setItem('cart', JSON.stringify(state.list));
		},
		removeCartItem: (state, action) => {
			state.list = state.list.filter((_, idx) => idx !== action.payload);
			localStorage.setItem('cart', JSON.stringify(state.list));
		},
		resetCartStore: (state) => {
			state.list = [];
			localStorage.removeItem('cart');
		},
	},
});

export const {
	addCartItem,
	removeCartItem,
	resetCartStore,
} = cartSlice.actions;

export default cartSlice.reducer;
