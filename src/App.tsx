import './App.css';
import { books } from './data/index';

import Books from './components/Books';
import LogoShower from './components/LogoShower';
import TestUseAsync from './components/TestUseAsync';
import TestUseLocalStrorage from './components/TestUseLocalStrorage';
import TestOnClickOutside from './components/TestOnClickOutside';
import TestUseHover from './components/TestUseHover';

function App() {

	return (
		<div className={`app`} style={{width: '400px'}}>
      <TestOnClickOutside/>
			<TestUseHover/>
			<LogoShower />
			<TestUseLocalStrorage />
			<Books items={books} />
			<div style={{ marginTop: '50px' }}>
				<TestUseAsync />
			</div>
		</div>
	);
}

export default App;
