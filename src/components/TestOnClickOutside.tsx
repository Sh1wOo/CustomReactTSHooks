import { useState, useRef, useCallback, SetStateAction } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { Button } from '../ui/Button';

const TestOnClickOutside = () => {
	// Create a ref that we add to the element for which we want to detect outside clicks
	const ref = useRef<HTMLDivElement>(null);
	// State for our modal
	const [isModalOpen, setModalOpen] = useState<boolean>(false);
	// Call hook passing in the ref and a function to call on outside click
	useOnClickOutside(
		ref,
		useCallback(() => setModalOpen(false), [])
	);

	const handeClick = (state: SetStateAction<boolean>): void => {
		setModalOpen(state);
		useLockBodyScroll();
	};

	return (
		<div>
			{isModalOpen ? (
				<div ref={ref} style={{margin: '50px'}}>
					👋 Hey, I'm a modal. Click anywhere outside of me to close.
				</div>
			) : (
				<Button style={{margin: '50px'}} type='primary' onClick={() => handeClick(true)}>Open Modal</Button>
			)}
		</div>
	);
};

export default TestOnClickOutside;
