import axios from 'axios';
import { toast } from 'react-toastify';

// Set config defaults when creating the instance
const instance = axios.create({
	baseURL: `http://localhost:4040/api/v1`,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`,
	},
});

// set include cookie
instance.defaults.withCredentials = true;

instance.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		let status = (error && error.response && error.response.status) || 500;
		let arlet = '';
		switch (status) {
			case 401:
				return error.response.data;

			case 403:
				arlet = 'Not Permission resource ';
				break;

			default:
				return;
		}

		return Promise.reject(error);
	}
);

export default instance;
