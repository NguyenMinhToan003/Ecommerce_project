import axios from './setup';
const signUpService = async (data) => {
	return await axios.post('/signup', data);
};

export { signUpService };
