import './index.scss';
import { IContent, IGroup, keyboard } from './keys';
import * as React from 'react';

const Index: React.FC = () => {
	const groupItem = (item?: IContent[]) => {
		return (
			<React.Fragment>
				{item?.map((item: IContent, index: number) => {
					const keyDownItem = keyDown.find((keyDown) => keyDown === item.key) ? 'activeDown' : '';
					const historyDownItem = historyDown.find((keyDown) => keyDown === item.key) ? 'activeHistory' : '';
					const title = item.title === '' ? 'empty' : '';

					return (
						<div key={index} className={`default-key ${keyDownItem} ${historyDownItem} ${title}`} style={{ width: item.width }}>
							{item.title}
						</div>
					);
				})}
			</React.Fragment>
		);
	};

	const lineItem = (item?: IGroup[]) => {
		return (
			<React.Fragment>
				{item?.map((item, index: number) => {
					return (
						<div key={index} className='group'>
							{groupItem(item?.groupOne)}
							{groupItem(item?.groupTwo)}
							{groupItem(item?.groupThree)}
							{groupItem(item?.groupFour)}
							{groupItem(item?.groupFive)}
						</div>
					);
				})}
			</React.Fragment>
		);
	};

	const [keyDown, setKeyDown] = React.useState<string[]>([]);
	const [historyDown, setHistoryDown] = React.useState<string[]>([]);

	const initialize = React.useCallback(() => {
		const state: string[] = [];
		const history: string[] = [];

		const handleUserKeyDown = (event: { keyCode: number }) => {
			if (state.indexOf(String(event.keyCode)) === -1) {
				state.push(String(event.keyCode));
				history.push(String(event.keyCode));
			}

			setHistoryDown(history);
			setKeyDown(state);
		};

		const handleUserKeyUp = (event: { keyCode: number }) => {
			const key = String(event.keyCode);
			const index = state.indexOf(key);

			if (index > -1) {
				state.splice(index, 1);

				setKeyDown(state);
			}
		};

		window.addEventListener('keyup', handleUserKeyUp);

		window.addEventListener('keydown', handleUserKeyDown);

		window.addEventListener('keydown', function (e: KeyboardEvent) {
			e.preventDefault();
		});

		document.oncontextmenu = function (e) {
			e.preventDefault();
			return false;
		};
	}, []);

	React.useEffect(() => {
		initialize();
	}, []);

	return (
		<div className='keyboard-background-default'>
			{JSON.stringify(keyDown)}
			<div className='header'>
				<div className='container'>
					<div>Testador de Teclado Online</div>
					<div>Desenvolvido por: Victor Daniel</div>
				</div>
			</div>
			<div className='keyboard'>
				{keyboard.map((item, index: number) => {
					return (
						<React.Fragment key={index}>
							<div className='container'>{lineItem(item.lineOne)}</div>
							<div className='container'>{lineItem(item.lineTwo)}</div>
							<div className='container'>{lineItem(item.lineThree)}</div>
							<div className='container'>{lineItem(item.lineFour)}</div>
							<div className='container'>{lineItem(item.lineFive)}</div>
							<div className='container'>{lineItem(item.lineSix)}</div>
						</React.Fragment>
					);
				})}
			</div>
			<div className='registry'>
				<div className='title'>Registro de Eventos</div>
				<div className='container-registry'>
					<div className='subTitle'>09/04/2023 10:10 - Registro de tecla ( A )</div>
					<div className='subTitle'>09/04/2023 10:10 - Registro de tecla ( B )</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
