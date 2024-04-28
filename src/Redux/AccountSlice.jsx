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
};

const AccountSlice = createSlice({
	name: 'account',
	initialState: {
		data: accountDefault.data,
		isAuth: accountDefault.isAuth,
	},
	reducers: {
		setAccount: (state, action) => {
			const user = action.payload;
			state.data = { ...user };
			state.isAuth = true;
		},
		resetAccount: (state) => {
			state.data = accountDefault.data;
			state.isAuth = accountDefault.isAuth;
		},
	},
});

export const { setAccount, resetAccount } = AccountSlice.actions;

export default AccountSlice.reducer;
