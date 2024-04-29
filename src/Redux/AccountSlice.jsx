import { createSlice } from '@reduxjs/toolkit';

const accountDefault = {
	data: {
		id: '',
		name: '',
		email: '',
		phone: '',
		address: '',
		avatar: '',
		group_id: '',
		token: '',
	},
	isAuth: false,
	isLoading: true,
};

const AccountSlice = createSlice({
	name: 'account',
	initialState: {
		data: accountDefault.data,
		isAuth: accountDefault.isAuth,
		isLoading: accountDefault.isLoading,
	},
	reducers: {
		setAccount: (state, action) => {
			const user = action.payload;
			state.data = { ...user };
			state.isAuth = true;
			state.isLoading = false;
		},
		resetAccount: (state) => {
			state.data = accountDefault.data;
			state.isAuth = accountDefault.isAuth;
			state.isLoading = accountDefault.isLoading;
		},
	},
});

export const { setAccount, resetAccount } = AccountSlice.actions;

export default AccountSlice.reducer;
