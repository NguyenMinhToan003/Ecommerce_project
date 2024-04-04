import { createSlice } from '@reduxjs/toolkit';
const AccountSlice = createSlice({
	name: 'account',
	initialState: {
		data: JSON.parse(localStorage.getItem('account')) || [],
		isAuth: JSON.parse(localStorage.getItem('account')) ? true : false,
	},
	reducers: {
		setAccount: (state, action) => {
			const user = action.payload;
			state.data = user;
			state.isAuth = true;
			localStorage.setItem('account', JSON.stringify(state));
		},
		resetAccount: (state) => {
			state.data = [];
			state.isAuth = false;
			localStorage.setItem('account', JSON.stringify(state.data));
			console.log('>>>> reset account:', state);
		},
	},
});
export const { setAccount, resetAccount } = AccountSlice.actions;
export default AccountSlice.reducer;
