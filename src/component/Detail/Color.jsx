const Color = (props) => {
	const color = props.colorAmount;

	return (
		<div className='flex items-center gap-2'>
			{color.map((item, index) => {
				return (
					<label htmlFor={item}>
						<input
							type='radio'
							className='hidden peer'
							id={item}
							name='color'
						/>
						<div
							className='peer radio-color  '
							onClick={() => props.handlerSetColor(item)}>
							<div
								style={{ backgroundColor: item }}
								className='w-[12px] h-[12px] rounded-full'></div>
						</div>
					</label>
				);
			})}
		</div>
	);
};
export default Color;
