import { useState, useEffect } from 'react';

function useKeyPress(targetKey: string): boolean {
	const [keyPressed, setKeyPressed] = useState<boolean>(false);

	const downHandler = ({ key }: KeyboardEvent): void => {
		if (key === targetKey) {
			setKeyPressed(true);
		}
	};

	const upHandler = ({ key }: KeyboardEvent): void => {
		if (key === targetKey) {
			setKeyPressed(false);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', downHandler);
		window.addEventListener('keyup', upHandler);

		return () => {
			window.removeEventListener('keydown', downHandler);
			window.removeEventListener('keyup', upHandler);
		};
	}, [targetKey]);

	return keyPressed;
}

export { useKeyPress };