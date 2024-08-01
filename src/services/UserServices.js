import axios from './setup';
const signUpService = async (data) => {
	return await axios.post('/signup', data);
};
const loginService = async (data) => {
	return await axios.post('/login', data);
};
const accessTokenService = async (data) => {
	return await axios.post('/accessToken', data);
};
const refreshTokenService = async (data) => {
	return await axios.post('/refreshToken', data);
};
const logoutService = async (id) => {
	return await axios.post('/logout', id);
};
const getListUserService = async (page, limit) => {
	return await axios.get(`/getListUser?page=${page}&limit=${limit}`);
};
const getDataUserService = async (id) => {
	return await axios.post('/getDataUser', { id });
};
const updateUser = async (data) => {
	return await axios.post('/updateDataUser', data);
};
const deleteUser = async (id, idAction) => {
	return await axios.delete('/deleteUser', { data: { id, idAction } });
};

export {
	updateUser,
	signUpService,
	loginService,
	accessTokenService,
	logoutService,
	deleteUser,
	getListUserService,
	refreshTokenService,
	getDataUserService,
};
