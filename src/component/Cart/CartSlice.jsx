import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		list: localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [],
	},
	reducers: {
		addItem: (state, action) => {
			if (action.payload.index !== -1) {
				let newList = state.list;
				newList[action.payload.index] = action.payload.data;
			} else state.list = [...state.list, action.payload.data];
			localStorage.setItem('cart', JSON.stringify(state.list));
		},
		removeItem: (state, action) => {
			state.list = state.list.filter((item, index) => index !== action.payload);
			localStorage.setItem('cart', JSON.stringify(state.list));
		},
	},
});

// Action creators are generated htmlFor each case reducer function
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
