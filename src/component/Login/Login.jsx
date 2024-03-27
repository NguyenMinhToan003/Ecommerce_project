import './Login.css';
import Bg from '../../assets/Image/bg-login.png';
const Login = () => {
	return (
		<>
			<div className='grid md:grid-cols-[minmax(auto_,1fr),_470px] gap-48 max-w-[1300px] container mx-auto grid-cols-1'>
				<div>
					<img src={Bg} alt='logo' />
				</div>
				<form className=' flex justify-center items-start flex-col p-4 '>
					<h3 className='text-4xl mb-6'>Log in to Exclusive</h3>
					<div className='w-full'>
						<label htmlFor='email'>Enter your details below</label>
						<input
							type='email'
							id='email'
							placeholder='Email or Phone Number'
							className='input my-12'
						/>
					</div>
					<div className='w-full'>
						<input
							type='password'
							id='password'
							placeholder='Password'
							className='input w-full'
						/>
					</div>

					<div className='w-full flex justify-between items-center mt-10'>
						<button className='px-12 py-4 bg-[#db4444] rounded text-white  '>
							Login
						</button>
						<a className='text-[#db4444]'>Forget Password?</a>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
