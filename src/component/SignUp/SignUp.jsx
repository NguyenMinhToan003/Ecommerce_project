import Image from '../../assets/Image/login_art.jpg';
import IconGoogle from '../../assets/Image/Google';
import IconFacebook from '../../assets/Image/Facebook';
import './SignUp.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { signUpService } from '../../services/UserServices';
import { toast } from 'react-toastify';

const Login = () => {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePass, setRePass] = useState('');
	const [group, setGroup] = useState(4);
	const [gender, setGender] = useState(0);
	const [phone, setPhone] = useState('');
	const refName = useRef();
	const refAddress = useRef();
	const refEmail = useRef();
	const refPassword = useRef();
	const refRePass = useRef();
	const refPhone = useRef();
	const list = [
		{
			name: 'Name',
			placeholder: 'Your name',
			type: 'text',
			ref: refName,
			onkeydown: (e) => handlerKeyDown(e),
			onChange: (e) => setName(e.target.value),
		},
		{
			name: 'Address',
			placeholder: 'Example: Hanoi, Vietnam',
			type: 'text',
			ref: refAddress,
			onChange: (e) => setAddress(e.target.value),
		},
		{
			name: 'Email',
			placeholder: 'Example@gmail.com',
			type: 'email',
			ref: refEmail,
			onkeydown: (e) => handlerKeyDown(e),
			onChange: (e) => setEmail(e.target.value),
		},
		{
			name: 'Password',
			placeholder: 'At least 8 characters',
			type: 'password',
			ref: refPassword,
			onkeydown: (e) => handlerKeyDown(e),
			onChange: (e) => setPassword(e.target.value),
		},
		{
			name: 'Re-pass',
			placeholder: 'At least 8 characters',
			type: 'password',
			ref: refRePass,
			onkeydown: (e) => handlerKeyDown(e),
			onChange: (e) => setRePass(e.target.value),
		},
		{
			name: 'Phone',
			placeholder: 'Your Phone Number',
			type: 'number',
			ref: refPhone,
			onkeydown: (e) => handlerKeyDown(e),
			onChange: (e) => setPhone(e.target.value),
		},
	];

	const handlerKeyDown = (e) => {
		if (e.key === 'Enter') {
			if (e.target == refName.current) refAddress.current.focus();
			else if (e.target === refAddress.current) refEmail.current.focus();
			else if (e.target === refEmail.current) refPassword.current.focus();
			else if (e.target === refPassword.current) refRePass.current.focus();
			else if (e.target === refRePass.current) refPhone.current.focus();
		}
	};

	const checkDataSubmit = () => {
		if (!name) {
			toast.error('Name is required');
			return false;
		} else if (!address) {
			toast.error('Address is required');
			return false;
		} else if (!email) {
			toast.error('Email is required');
			return false;
		} else if (!password) {
			toast.error('Password is required');
			return false;
		} else if (!rePass) {
			toast.error('Re-password is required');
			return false;
		} else if (password !== rePass) {
			toast.error('Re-password is not match');
			refRePass.current.focus();
			return false;
		} else if (!phone) {
			toast.error('Phone is required');
			return false;
		} else if (password.length < 8) {
			toast.error('Password must be at least 8 characters');
			refPassword.current.focus();
			return false;
		}
		return true;
	};
	const hanlderSubmit = async () => {
		const check = checkDataSubmit();
		if (!check) return;
		const response = await signUpService({
			name,
			address,
			email,
			password,
			group,
			gender,
			phone,
		});
		if (+response.EC === 0) {
			toast.success(response.EM);
			navigate(-1);
		} else if (+response.EC === 1) {
			toast.error(response.EM);
			navigate('/login');
		} else {
			toast.error(response.EM);
		}
	};

	return (
		<>
			<div className='grid lg:grid-cols-[600px,minmax(auto,_1fr)] w-full p-7 text-primary grid-cols-1'>
				<div>
					<img src={Image} className='aspect-auto w-full' alt='Login Art' />
				</div>
				<div className='flex flex-row justify-center items-center h-full'>
					<div className='max-w-full'>
						<h3 className='font-medium text-4xl text-[#0c1421] mb-5'>
							Welcome Back 👋
						</h3>
						<span className='tracking-wide'>
							Today is a new day. It's your day. Your shape it. Sign in to start
							managing your project
						</span>
						<div className='w-[80%] mx-auto flex flex-col gap-6 mt-12'>
							{list.map((item, index) => (
								<div key={index} className='flex flex-col gap-2'>
									<label htmlFor={item.name}>{item.name}</label>
									<input
										type={item.type}
										placeholder={item.placeholder}
										className='input'
										ref={item.ref}
										id={item.name}
										onKeyDown={item.onkeydown}
										onChange={item.onChange}
									/>
								</div>
							))}

							<div className='flex gap-2 items-center justify-between'>
								<div className='flex flex-col gap-2'>
									<label>Group:</label>
									<select
										className='input'
										defaultValue={4}
										onChange={(e) => setGroup(+e.target.value)}>
										<option value={1}>Admin</option>
										<option value={2}>Developer</option>
										<option value={3}>User</option>
										<option value={4}>Guest</option>
									</select>
								</div>
								<div className='flex flex-col gap-2'>
									<div className='flex gap-3 justify-between items-center'>
										<label htmlFor='male'>Male</label>
										<input
											type='radio'
											value='0'
											name='gender'
											id='male'
											className='w-5 h-5'
											onClick={() => setGender(0)}
											defaultChecked={gender === 0}
										/>
									</div>
									<div className='flex gap-3 justify-between items-center'>
										<label htmlFor='female'>Female</label>
										<input
											type='radio'
											value='1'
											name='gender'
											id='female'
											className='w-5 h-5'
											onClick={() => setGender(1)}
											defaultChecked={gender === 1}
										/>
									</div>
								</div>
							</div>
							<button
								className='px-3 py-4 rounded-[16px] bg-[#162d3a] text-center text-white'
								type='button'
								onClick={() => hanlderSubmit()}>
								Create Account
							</button>
							<hr className='my-6' />
							<div className='flex w-full justify-between items-center'>
								<button className='flex flex-row justify-center items-center gap-3 bg-[#f3f9fa] rounded-[16px] px-4 py-3'>
									<IconGoogle />
									<span>Sign in with Google</span>
								</button>
								<button className='flex flex-row justify-center items-center gap-3 bg-[#f3f9fa] rounded-[16px] px-4 py-3'>
									<IconFacebook />
									<span>Sign in with Facebook</span>
								</button>
							</div>
						</div>
						<span className='flex flex-row items-center justify-center mt-10'>
							<span>Have an account!</span>
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
