export const handleKeyDown = (
	event: React.KeyboardEvent<HTMLDivElement>,
	keyDown: string[],
	historyDown: string[],
	setHistoryDown: React.Dispatch<React.SetStateAction<string[]>>,
	setKeyDown: React.Dispatch<React.SetStateAction<string[]>>,
) => {
	const key = String(event.keyCode);

	if (keyDown.find((item) => item === key) === undefined) {
		setKeyDown([...keyDown, key]);
		setHistoryDown([...historyDown, key]);
	}

	event.preventDefault();
};

export const handleKeyUp = (
	event: React.KeyboardEvent<HTMLDivElement>,
	keyDown: string[],
	setKeyDown: React.Dispatch<React.SetStateAction<string[]>>,
) => {
	const key = String(event.keyCode);

	setKeyDown(keyDown.filter((item) => item !== key));

	event.preventDefault();
};
