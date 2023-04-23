import { useToggle } from '../hooks/useToggle';
import { Button } from '../ui/Button';
import logo from '../assets/react.svg';

const LogoShower = () => {
  const [isVisible, toggleVisibale] = useToggle(true);

  return (
    <>
      <Button type='primary' className='test' onClick={toggleVisibale}>
        {!isVisible ? 'Показать лого' : 'Скрыть лого'}
      </Button>

      {isVisible && (
        <div className=''>
          <img className='logo-1' src={logo} />
        </div>
      )}
    </>
  );
};

export default LogoShower;
