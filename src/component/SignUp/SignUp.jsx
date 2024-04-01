import Image from '../../assets/Image/login_art.jpg';
import IconGoogle from '../../assets/Image/Google';
import IconFacebook from '../../assets/Image/Facebook';
import './SignUp.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { signUpService } from '../../services/UserServices';
const Login = () => {
	const [name, setName] = useState('');
	const [adress, setAdress] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState(0);
	const [rePass, setRePass] = useState(0);
	const [group, setGroup] = useState(4);
	const [gender, setGender] = useState(0);

	const hanlderSubmit = async () => {
		const respose = await signUpService({
			name,
			adress,
			email,
			password,
			group,
			gender,
		});
		console.log(respose);
	};
	return (
		<>
			<div className=' grid lg:grid-cols-[600px,minmax(auto,_1fr)] w-full p-7  text-primary grid-cols-1'>
				<div>
					<img src={Image} className='aspect-auto w-full' />
				</div>
				<div className=' flex flex-row justify-center items-center h-full '>
					<div className='max-w-full'>
						<h3 className='font-medium text-4xl text-[#0c1421]  mb-5'>
							Welcome Back 👋
						</h3>
						<span className='tracking-wide '>
							Today is a new day. It's your day. Your shape it. Sign in to start{' '}
							management your project
						</span>
						<div className='w-[80%] mx-auto flex flex-col gap-6 mt-12'>
							<div className='flex flex-col gap-2'>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									className='input'
									placeholder='your name'
									name='name'
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label htmlFor='adress'>Adress</label>
								<input
									type='text'
									className='input'
									placeholder='Example: Hanoi, Vietnam'
									name='adress'
									onChange={(e) => setAdress(e.target.value)}
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									className='input'
									placeholder='Example@gmail.com'
									name='email'
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label htmlFor='password'>Password</label>
								<input
									type='passsword'
									className='input'
									placeholder='At letest 8 characters'
									name='password'
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label htmlFor='re-pass'>Re-password</label>
								<input
									type='passsword'
									className='input'
									placeholder='At letest 8 characters'
									name='re-pass'
									onChange={(e) => setRePass(e.target.value)}
								/>
							</div>
							<div className='flex gap-2 items-center justify-between'>
								<div className='flex flex-col gap-2 '>
									<label>Group:</label>
									<select
										className='input'
										defaultValue={4}
										onChange={(e) => setGroup(+e.target.value)}>
										<option value={1} className='input '>
											Admin
										</option>
										<option value={2} className='input '>
											Developer
										</option>
										<option value={3} className='input '>
											User
										</option>
										<option value={4} className='input '>
											Guest
										</option>
									</select>
								</div>
								<div className='flex flex-col gap-2 '>
									<div className='flex gap-3 justify-between items-center'>
										<label htmlFor='male'>Male</label>
										<input
											type='radio'
											value='0'
											name='gender'
											onClick={() => setGender(0)}
										/>
									</div>
									<div className='flex gap-3 justify-between items-center'>
										<label htmlFor='famale'>famale</label>
										<input
											type='radio'
											value='1'
											name='gender'
											onClick={() => setGender(1)}
										/>
									</div>
								</div>
							</div>
							<button
								className='px-3 py-4 rounded-[16px] bg-[#162d3a] text-center text-white'
								type='button'
								onClick={() => {
									hanlderSubmit();
								}}>
								Create Account
							</button>
							<hr className='my-6' />

							<div className='flex  w-full justify-between items-center'>
								<button className='flex flex-rol justify-center items-center gap-3 bg-[#f3f9fa] rounded-[16px] px-4 py-3'>
									<IconGoogle />
									<span>Sign in with Google</span>
								</button>
								<button className='flex flex-rol justify-center items-center gap-3 bg-[#f3f9fa] rounded-[16px] px-4 py-3'>
									<IconFacebook />
									<span>Sign in with Facebook</span>
								</button>
							</div>
						</div>
						<span className='flex flex-row items-center justify-center mt-10'>
							<span>Have Account !</span>
							<NavLink to='/login' className='text-[#486ced] cursor-pointer'>
								Login
							</NavLink>
						</span>
						<div className='text-center text-[#959CB6] uppercase mt-9'>
							© 2023 ALL RIGHTS RESERVED
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
