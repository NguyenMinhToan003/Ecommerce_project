import axios from './setup';
const signUpService = async (data) => {
	return await axios.post('/signup', data);
};
const loginService = async (data) => {
	return await axios.post('/login', data);
};

export { signUpService, loginService };
