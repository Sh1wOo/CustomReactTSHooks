export default interface TestUseAsyncInterface {
	status: string;
	inputRef: RefObject<HTMLInputElement>;
	execute: () => void;
}
