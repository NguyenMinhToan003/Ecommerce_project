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
const logoutService = async (id) => {
	return await axios.post('/logout', id);
};
export { signUpService, loginService, accessTokenService, logoutService };
