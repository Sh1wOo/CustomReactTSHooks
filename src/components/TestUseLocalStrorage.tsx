import { useKeyPress } from '../hooks/useKeyPress';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';
import { useRef } from 'react';

const TestUseLocalStorage = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const keyPressed = useKeyPress('Enter');

	const [storedValue, setValue] = useLocalStorage({
		initialValue: 'test',
		key: 'New',
	});

	return (
		<>
			{keyPressed && <p>Вы активировали Hook useKeyPress</p>}
			<h2>{storedValue}</h2>
			<Input
				innerRef={inputRef}
				placeholder='Надпись для LocalStorage'
				style={{ margin: '20px' }}
				styleType='success'
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						setValue(inputRef.current?.value ?? '');
					}
				}}
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
