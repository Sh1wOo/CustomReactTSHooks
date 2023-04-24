import { FC, HTMLProps } from 'react';
import './Button.css';

type ButtonType = 'primary' | 'success' | 'error';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
	children: string;
	className?: string;
	type: ButtonType;
}

const Button: FC<ButtonProps> = ({ children, className, type, ...props }) => {
	let style: string = '';

	switch (type) {
		case 'primary':
			style = 'button-prim button';
			break;
		case 'success':
			style = 'button-ornage button';
			break;
		case 'error':
			style = 'button-err button';
			break;
	}

	return (
		<button className={`${className} ${style}`} {...props}>
			{children}
		</button>
	);
};

export { Button };
