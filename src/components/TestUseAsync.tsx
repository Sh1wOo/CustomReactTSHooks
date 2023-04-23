import { useAsync } from '../hooks/useAsync';
import { Button } from '../ui/Button';

const TestUseAsync = () => {
  const { execute, status, value, error } = useAsync<string>(myFunction, false);
  return (
    <div>
      {status === 'idle' && <div>Start your journey by clicking a button</div>}
      {status === 'success' && <div>{value}</div>}
      {status === 'error' && <div>{error}</div>}
      <Button type='primary' onClick={execute} disabled={status === 'pending'}>
        {status !== 'pending' ? 'Click me' : 'Loading...'}
      </Button>
    </div>
  );
};

// An async function for testing our hook.
// Will be successful 50% of the time.

const myFunction = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve('Submitted successfully 🙌')
        : reject('Oh no there was an error 😞');
    }, 2000);
  });
};

console.log(myFunction());

export default TestUseAsync;
