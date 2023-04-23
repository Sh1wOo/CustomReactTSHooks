import { FC, HTMLProps, LegacyRef, MutableRefObject, RefObject } from 'react';
import './Input.css';

type InputType = 'primary' | 'success' | 'error';
type InnerRefType =
	| LegacyRef<HTMLInputElement>
	| MutableRefObject<HTMLInputElement>
	| RefObject<HTMLInputElement>
	| undefined;

interface InputProps extends HTMLProps<HTMLInputElement> {
	styleType: InputType;
	className?: string;
	innerRef?: InnerRefType;
}

const Input: FC<InputProps> = ({
	styleType,
	className,
	innerRef,
	...props
}) => {
	let style: string = '';
	switch (styleType) {
		case 'primary':
			style = 'input-primary input-G';
			break;
		case 'success':
			style = 'input-orange input-G';
			break;
		case 'error':
			style = 'input-err input-G';
			break;
	}

	return className ? (
		<input
			className={`${className} ${style}`}
			type='text'
			ref={innerRef}
			{...props}
		/>
	) : (
		<input className={`${style}`} type='text' ref={innerRef} {...props} />
	);
};

export default Input;
