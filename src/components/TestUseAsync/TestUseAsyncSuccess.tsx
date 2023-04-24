import UseAsyncSucces from "./interfaces/TestUseAsyncSucces.interface"

const TestUseAsyncSuccess = ({status,value}: UseAsyncSucces) => {
  return (
    <>
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
    </>
  )
}

export default TestUseAsyncSuccess