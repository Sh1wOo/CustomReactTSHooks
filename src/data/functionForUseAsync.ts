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

export default myFunction;