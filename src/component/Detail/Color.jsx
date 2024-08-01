const Color = (props) => {
	const color = props.colorAmount;
	const { coloring } = props;
	console.log('>>>>COLORING', coloring);
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
							defaultChecked={coloring === item ? true : false}
						/>
						<div
							className='peer radio-color  '
							onClick={() => {
								console.log(item);
								props.handlerSetColor(item);
							}}>
							<div
								style={{ backgroundColor: item }}
								className='w-[12px] h-[12px] rounded-full '></div>
						</div>
					</label>
				);
			})}
		</div>
	);
};
export default Color;
