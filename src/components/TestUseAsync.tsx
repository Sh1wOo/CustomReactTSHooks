import { useAsync } from "../hooks/useAsync"
import { Button } from "../ui/Button"

const TestUseAsync = () => {
	const { execute, status, value, error } = useAsync<string>(
		myFunction,
		false
	)
	return (
		<div>
			{status === "idle" && (
				<div style={{ margin: "40px" }}>
					Start your journey by clicking a button
				</div>
			)}
			{status === "success" && (
				<div style={{ margin: "40px" }}>{value}</div>
			)}
			{status === "error" && (
				<div style={{ margin: "40px" }}>{error}</div>
			)}
			<Button
				type='primary'
				onClick={execute}
				disabled={status === "pending"}
			>
				{status !== "pending" ? "Click me" : "Loading..."}
			</Button>
		</div>
	)
}

// An async function for testing our hook.
// Will be successful 50% of the time.

const myFunction = (): Promise<string> => {
	return fetch(
		"https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
	)
		.then((response) => response.json())
		.then((commits) => commits[0].author.login)
}

// console.log(myFunction())

export default TestUseAsync
