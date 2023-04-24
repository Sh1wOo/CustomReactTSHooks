import { useHover } from '../hooks/useHover';

const TestUseHover = () => {
	const [hoverRef, isHovered] = useHover<HTMLDivElement>();

	return (
		<div
			style={{
				padding: '50px',
				fontSize: '30px',
				borderRadius: '15px',
				margin: '50px',
				backgroundColor: isHovered ? '#00e3e3' : '#ddd',
			}}
			ref={hoverRef}
		>
			{isHovered ? '😁' : '☹️'}
		</div>
	);
};

export default TestUseHover;
