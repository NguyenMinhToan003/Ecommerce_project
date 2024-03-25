const Profile = () => {
	return (
		<form className='flex gap-5 flex-col  items-start max-w-[870px] min-w-[630px] px-20 py-10'>
			<h2 className='h2 text-[#db4444]'>Edit Your Profile</h2>
			<div className='space'>
				<div className='flex flex-col'>
					<label for='firstname'>First Name</label>
					<input
						type='text'
						placeholder='First Name'
						name='firstname'
						className='input-set'
					/>
				</div>
				<div>
					<label for='lastname'>Last Name</label>
					<input
						type='text'
						placeholder='Last Name'
						name='lastname'
						className='input-set'
					/>
				</div>
			</div>
			<div className='space'>
				<div className='flex flex-col'>
					<label for='email'>Email</label>
					<input
						type='email'
						placeholder='Email'
						name='email'
						className='input-set'
					/>
				</div>
				<div>
					<label for='address'>Address</label>
					<input
						type='text'
						placeholder='Address'
						name='address'
						className='input-set'
					/>
				</div>
			</div>
			<div className='space flex flex-col gap-4 w-full items-start '>
				<label for='password'>Password Changes</label>
				<input
					type='password'
					placeholder='Current Passwod'
					name='password'
					className='input-set'
				/>
				<input
					type='password'
					placeholder='New Password'
					name='password'
					className='input-set'
				/>
				<input
					type='password'
					placeholder='Confirm Password'
					name='password'
					className='input-set'
				/>
			</div>
			<div className='flex justify-end items-center gap-4 w-full'>
				<button>Cancel</button>
				<button className='px-12 py-4 bg-[#db4444] text-white rounded-md'>
					Save Changes
				</button>
			</div>
		</form>
	);
};
export default Profile;
