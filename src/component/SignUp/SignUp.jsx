import { FaGoogle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Bg from '../../assets/Image/bg-login.png';
const SignUp = () => {
	return (
		<>
			<div className='md:grid md:grid-cols-[minmax(auto_,1fr),_470px] gap-48 max-w-[1300px] grid-cols-1 flex flex-col-reverse container mx-auto'>
				<div>
					<img src={Bg} alt='logo' />
				</div>
				<form className=' flex justify-center items-start flex-col p-4'>
					<h3 className='text-4xl mb-6 '>Create an account</h3>
					<div className='w-full'>
						<label htmlFor='email'>Enter your details below</label>
						<input
							type='text'
							id='name'
							placeholder='Name'
							className='input mt-10'
						/>
						<input
							type='email'
							id='email'
							placeholder='Email or Phone Number'
							className='input my-12'
						/>
						<input
							type='password'
							id='password'
							placeholder='Password'
							className='input w-full'
						/>
					</div>

					<div className='w-full mt-10 flex flex-col gap-10'>
						<button className='px-12 py-4 bg-[#db4444] rounded text-white  '>
							Create Account
						</button>
						<a className=' px-12 py-4 text-center rounded-md border-black border-[1px] flex justify-center items-center gap-3'>
							<FaGoogle />
							<span className='text-[#db4444]'>Sign up with Google</span>
						</a>
						<div className='flex justify-between items-center'>
							<p>Already have account?</p>
							<NavLink to='/login' className='text-[#db4444] underline'>
								Login
							</NavLink>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignUp;
