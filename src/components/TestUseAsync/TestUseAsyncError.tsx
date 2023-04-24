import useAsyncError from "./interfaces/TestUseAsyncError.interface"

const TestUseAsyncError = ({status, error}: useAsyncError) => {
  return (
    <>
      {status === 'error' && (
				<div style={{ margin: '40px' }}>{error?.message}</div>
			)}
    </>
  )
}

export default TestUseAsyncError