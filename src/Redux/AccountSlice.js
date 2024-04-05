import { createSlice } from '@reduxjs/toolkit';
const account = JSON.parse(localStorage.getItem('account'));
const AccountSlice = createSlice({
	name: 'account',
	initialState: {
		data: account || null,
		isAuth: account ? true : false,
	},
	reducers: {
		setAccount: (state, action) => {
			const user = action.payload;
			state.data = user;
			state.isAuth = true;
			localStorage.setItem('account', JSON.stringify(state));
		},
		resetAccount: (state) => {
			state.data = null;
			state.isAuth = false;
			localStorage.removeItem('account');
			console.log('>>>> reset account:', state);
		},
	},
});
export const { setAccount, resetAccount } = AccountSlice.actions;
export default AccountSlice.reducer;
