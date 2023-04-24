import React, { useRef, Suspense } from 'react';
import { useAsync } from '../../hooks/useAsync';
import TestUseAsyncBtn from './TestUseAsyncBtn';
import TestUseAsyncIDLE from './TestUseAsyncIDLE';
import myFunction from '../../data/functionForUseAsync';

const TestUseAsyncSuccess = React.lazy(() => import('./TestUseAsyncSuccess'));
const TestUseAsyncError = React.lazy(() => import('./TestUseAsyncError'));

const TestUseAsync = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { execute, status, value, error }: any = useAsync<string>(
		() => myFunction(inputRef.current?.value ?? ''),
		false
	);

	return (
		<>
			<TestUseAsyncIDLE status={status} inputRef={inputRef} execute={execute} />

			<Suspense fallback='Загрузка'>
				<TestUseAsyncSuccess status={status} value={value} />
			</Suspense>

			<Suspense fallback='Загрузка'>
				<TestUseAsyncError status={status} error={error} />
			</Suspense>

			<TestUseAsyncBtn status={status} execute={execute} />
		</>
	);
};

export default TestUseAsync;
