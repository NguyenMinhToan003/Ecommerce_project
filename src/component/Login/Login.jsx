import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginService } from '../../services/UserServices';
import { setAccount as setAccountRedux } from '../../Redux/AccountSlice';
import Image from '../../assets/Image/login_art.jpg';
import IconGoogle from '../../assets/Image/Google';
import IconFacebook from '../../assets/Image/Facebook';
import './Login.css';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const refAccount = useRef(null);
	const refPassword = useRef(null);
	const [account, setAccount] = useState('');
	const [password, setPassword] = useState('');

	const checkDataSubmit = () => {
		if (account === '') {
			toast.error('Account is required');
			refAccount.current.focus();
			return false;
		} else if (password === '') {
			toast.error('Password is required');
			refPassword.current.focus();
			return false;
		} else if (password.length < 8) {
			toast.error('Password must be at least 8 characters');
			refPassword.current.focus();
			return false;
		}
		return true;
	};

	const handlerOnkeyDown = (event) => {
		console.log(event);
		if (event.key === 'Enter') {
			if (event.target === refAccount.current) refPassword.current.focus();
			else if (event.target === refPassword.current) handlerSubmit();
		}
	};

	const handlerSubmit = async () => {
		const check = checkDataSubmit();
		if (!check) return;
		const response = await loginService({ account, password });
		if (response.EC === 0) {
			toast.success(response.EM);
			const user = response.DT;
			dispatch(setAccountRedux(user));
			navigate('/');
		} else if (response.EC === 1) {
			toast.error(response.EM);
		} else toast.error(response.EM);
	};

	return (
		<>
			<div className='grid lg:grid-cols-2 w-full p-7 text-primary grid-cols-1'>
				<div className='flex flex-row justify-center items-center h-full'>
					<div className='max-w-[25rem]'>
						<h3 className='font-medium text-4xl text-[#0c1421] mb-5'>
							Welcome Back 👋
						</h3>
						<span className='tracking-wide'>
							Today is a new day. It's your day. Your shape it. Sign in to start
							management your project
						</span>
						<div className='w-[24rem] flex flex-col gap-6 mt-12'>
							<div className='flex flex-col gap-2'>
								<label htmlFor='email'>Email / Phone number</label>
								<input
									type='text'
									className='input'
									placeholder='Example@gmail.com'
									ref={refAccount}
									name='email'
									onChange={(event) => {
										setAccount(event.target.value);
									}}
									onKeyDown={(event) => handlerOnkeyDown(event)}
									autoFocus
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									className='input'
									placeholder='At letest 8 characters'
									name='password'
									ref={refPassword}
									onChange={(event) => {
										setPassword(event.target.value);
									}}
									onKeyDown={(event) => handlerOnkeyDown(event)}
								/>
							</div>
							<a className='text-[#2b54ea] text-right cursor-pointer'>
								Forgot Password?
							</a>
							<button
								className='px-3 py-4 rounded-[16px] bg-[#162d3a] text-center text-white'
								type='button'
								onClick={() => handlerSubmit()}>
								Login
							</button>
							<hr className='my-6' />
							<button className='flex flex-row justify-center items-center gap-3 bg-[#f3f9fa] rounded-[16px] px-4 py-3'>
								<IconGoogle />
								<span>Sign in with Google</span>
							</button>
							<button className='flex flex-row justify-center items-center gap-3 bg-[#f3f9fa] rounded-[16px] px-4 py-3'>
								<IconFacebook />
								<span>Sign in with Facebook</span>
							</button>
						</div>
						<span className='flex flex-row items-center justify-center mt-10'>
							<span>Don't have an account ?</span>
							<NavLink to='/signup' className='text-[#486ced] cursor-pointer'>
								Signup
							</NavLink>
						</span>
						<div className='text-center text-[#959CB6] uppercase mt-9'>
							© 2023 ALL RIGHTS RESERVED
						</div>
					</div>
				</div>
				<div>
					<img src={Image} className='aspect-auto w-full' alt='login_art' />
				</div>
			</div>
		</>
	);
};

export default Login;
