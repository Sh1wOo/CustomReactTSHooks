import { useLocalStorage } from '../hooks/useLocalStorage';
import { Button } from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import {  useRef } from 'react';

const TestUseLocalStorage = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const [storedValue, setValue] = useLocalStorage({
		initialValue: 'test',
		key: 'name',
	});

	return (
		<>
			<h2>{storedValue}</h2>
			<Input
				innerRef={inputRef}
				placeholder='Надпись для LocalStorage'
				style={{ margin: '20px' }}
				styleType='success'
				type='text'
			/>
			<Button
				type='success'
				onClick={() => setValue(inputRef.current?.value ?? '')}
			>
				Записать значение в LocalStorage
			</Button>
		</>
	);
};

export default TestUseLocalStorage;
