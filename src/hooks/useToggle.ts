import { useState } from 'react';

type InitialValue = boolean | (() => boolean);

function useToggle(initialValue: InitialValue): [boolean, () => void] {
	const [value, setValue] = useState<boolean>(
		typeof initialValue === 'function' ? initialValue() : initialValue
	);

	const toggle = () => {
		setValue((prevValue) => !prevValue);
	};

	return [value, toggle];
}

export { useToggle };
