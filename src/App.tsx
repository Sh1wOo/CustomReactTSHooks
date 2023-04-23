import './App.css';
import { books } from './data/index';

import Books from './components/Books';
import LogoShower from './components/LogoShower';
import TestUseAsync from './components/TestUseAsync';
import TestUseLocalStrorage from './components/TestUseLocalStrorage';
import { Button } from './ui/Button';
import { useToggle } from './hooks/useToggle';

import TestOnClickOutside from './components/TestOnClickOutside';

function App() {
	const [isClicked, setClicked] = useToggle(true);

	return (
		<>
      <TestOnClickOutside/>
			<LogoShower />
			<TestUseLocalStrorage />
			<Books items={books} />
			<div style={{ marginTop: '50px' }}>
				<TestUseAsync />
			</div>
			<Button style={{ marginTop: '50px' }} type='primary'>ETst</Button>
		</>
	);
}

export default App;
