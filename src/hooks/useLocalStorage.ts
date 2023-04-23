import { useState, useCallback } from 'react';

interface LocalStorageProps {
	key: string;
	initialValue: string | Array<any> | number | object | undefined;
}

function useLocalStorage({ key, initialValue }: LocalStorageProps) {
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = useCallback(
		(value: any) => {
			setStoredValue(value);
			window.localStorage.setItem(key, JSON.stringify(value));
		},
		[key]
	);

	return [storedValue, setValue];
}

export { useLocalStorage };
