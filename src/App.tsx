import './App.css';
import { books } from './data/index';

import Books from './components/Books';
import LogoShower from './components/LogoShower';
import TestUseAsync from './components/TestUseAsync/TestUseAsync';
import TestUseLocalStrorage from './components/TestUseLocalStrorage';
import TestOnClickOutside from './components/TestOnClickOutside';
import TestUseHover from './components/TestUseHover';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import OfflineDetected from './components/OfflineDetect';

function App() {
	const isOnline = useOnlineStatus();

	return (
		<>
			{!isOnline ? (
				<>
					<OfflineDetected />
				</>
			) : (
				<h2
					style={{
						position: 'absolute',
						width: '100%',
						textAlign: 'center',
						marginTop: '20px',
					}}
				>
					Чтобы проверить как работает useOnline небохлдио на firefox нажать alt
					- файл - работать автонмно{' '}
				</h2>
			)}
			<div className={`app`} style={{ width: '400px' }}>
				<div className='container'>
					<TestOnClickOutside />
					<TestUseHover />
					<LogoShower />
					<TestUseLocalStrorage />
					<Books items={books} />
					<div style={{ marginTop: '30px' }}>
						<TestUseAsync />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
