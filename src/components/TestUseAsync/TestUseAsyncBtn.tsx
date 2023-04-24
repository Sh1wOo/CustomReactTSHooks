import { Button } from '../../ui/Button/Button'
import BtnInterface from './interfaces/TestUseAsyncBtn.interface'

const TestUseAsyncBtn = ({status, execute}: BtnInterface) => {
  return (
    <Button
				style={{ marginBottom: '50px', marginLeft: '30px' }}
				type='primary'
				onClick={execute}
				disabled={status === 'pending'}
			>
				{status !== 'pending' ? 'Получить данные из GitHub' : 'Загрузка...'}
			</Button>
  )
}

export default TestUseAsyncBtn