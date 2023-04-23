import { useLocalStorage } from '../hooks/useLocalStorage';
import { Button } from '../ui/Button';

const TestUseLocalStrorage = () => {
  const [storedValue, setValue] = useLocalStorage({
    initialValue: '',
    key: 'channelName',
  });
  return (
    <>
      <h2>{storedValue}</h2>
      <Button type='success' onClick={() => setValue('Sh1wOo')}>
        Записать значение
      </Button>
    </>
  );
};

export default TestUseLocalStrorage;
