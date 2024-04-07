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
			console.log(state.data);
			localStorage.setItem(
				'account',
				JSON.stringify({ data: state.data, isAuth: state.isAuth })
			);
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
