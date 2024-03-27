import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		list: [
			{
				id: 0,
				name: 'Havic HV G-92 Gamepad',
				star: 4,
				price: 192.0,
				size: ['XS', 'S', 'M', 'L', 'XL'],
				color: ['#ec4899', '#a855f7', '#22c55e', '#3b82f6'],
				detail:
					'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
			},
		],
	},
	reducers: {
		addItem: (state, action) => {
			state.list = [...state.list, action.payload];
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addItem, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
