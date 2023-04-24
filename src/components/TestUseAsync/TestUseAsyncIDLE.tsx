import TestUseAsyncInterface from './interfaces/TestUseAsyncidle.interface';
import { Input } from '../../ui/Input/Input';

const TestUseAsyncIDLE = ({
	status,
	inputRef,
	execute,
}: TestUseAsyncInterface) => {
	return (
		<>
			{status === 'idle' && (
				<div
					style={{ margin: '40px', display: 'flex', flexDirection: 'column' }}
				>
					<label>Вывод данных из GitHub</label>
					<Input
						innerRef={inputRef}
						placeholder='Имя профиля'
						style={{ marginTop: '20px' }}
						styleType='error'
						type='text'
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								execute();
							}
						}}
					/>
				</div>
			)}
		</>
	);
};

export default TestUseAsyncIDLE;
