import { useRef } from 'react';
import { useAsync } from '../hooks/useAsync';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';

const TestUseAsync = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { execute, status, value, error }: any = useAsync<string>(
		() => myFunction(inputRef.current?.value ?? ''),
		false
	);

	return (
		<div style={{}}>
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
							if(e.key === "Enter") {
								console.log(execute());
							}
						}}
					/>
				</div>
			)}
			{status === 'success' && (
				<>
					<img
						style={{
							width: '100px',
							height: '100px',
							marginLeft: '100px',
							flexDirection: 'column',
							borderRadius: ' 16px',
						}}
						src={value?.split(' ')[1]}
						alt=''
					/>
					<div style={{ margin: '20px' }}>
						<a
							href={value?.split(' ')[2]}
							target='_blank'
							style={{ margin: '40px', marginLeft: '100px' }}
						>
							{value?.split(' ')[0]}
						</a>
					</div>
				</>
			)}
			{status === 'error' && (
				<div style={{ margin: '40px' }}>{error?.message}</div>
			)}

			<Button
				style={{ marginBottom: '50px', marginLeft: '30px' }}
				type='primary'
				onClick={execute}
				disabled={status === 'pending'}
			>
				{status !== 'pending' ? 'Получить данные из GitHub' : 'Загрузка...'}
			</Button>
		</div>
	);
};

// An async function for testing our hook.
// Will be successful 50% of the time.

const myFunction = async (userName: string): Promise<string> => {
	const response = await fetch(`https://api.github.com/users/${userName}`);
	if (!response.ok) {
		throw new Error(
			`Неполучилось получить данные: ${response.status} ${response.statusText}`
		);
	}
	const commits = await response.json();
	return `${commits.login} ${commits.avatar_url} ${commits.html_url}`;
};

export default TestUseAsync;
