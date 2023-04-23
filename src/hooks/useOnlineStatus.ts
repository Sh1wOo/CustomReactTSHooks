import { useEffect, useState } from 'react';

function useOnlineStatus(): boolean {
	const [online, setOnline] = useState<boolean>(window.navigator.onLine);
	
	useEffect(() => {
		function handleOnline(): void {
			setOnline(true);
		}
		
		function handleOffline(): void {
			setOnline(false);
		}
		
		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);
		
		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);

	return online;
}

export { useOnlineStatus };
