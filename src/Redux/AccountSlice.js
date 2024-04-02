import { createSlice } from '@reduxjs/toolkit';
const AccountSlice = createSlice({
	name: 'account',
	initialState: {
		list: localStorage.getItem('account') || [],
	},
	reducers: {
		setAccount: (state, action) => {
			const user = action.payload;
			state.list = user;
			localStorage.setItem('account', JSON.stringify(state.list));
		},
	},
});
export const { setAccount } = AccountSlice.actions;
export default AccountSlice.reducer;
