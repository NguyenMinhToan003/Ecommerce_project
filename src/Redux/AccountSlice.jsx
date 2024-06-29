import { createSlice } from '@reduxjs/toolkit';
import { TbRuler } from 'react-icons/tb';

const accountDefault = {
	data: {
		id: '',
		name: '',
		email: '',
		phone: '',
		address: '',
		avatar: '',
		group_id: '',
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
			state.isAuth = Object.keys(user).length === 0 ? false : true;

			state.isLoading = false;
			localStorage.setItem('data', JSON.stringify(user));
		},
		resetAccount: (state) => {
			state.data = accountDefault.data;
			state.isAuth = accountDefault.isAuth;
			state.isLoading = accountDefault.isLoading;
			localStorage.setItem('data', JSON.stringify(accountDefault.data));
		},
	},
});

export const { setAccount, resetAccount } = AccountSlice.actions;

export default AccountSlice.reducer;
