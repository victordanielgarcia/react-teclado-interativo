import './index.scss';
import { keyboard } from './keys';
import * as React from 'react';

const Index: React.FC = () => {
	const groupItem = (item: any) => {
		return (
			<React.Fragment>
				{item?.map((item: any, index: number) => {
					return (
						<div
							key={index}
							className={`default-key ${keyDown.find((keyDown) => keyDown === item.key) ? 'activeDown' : ''} ${
								historyDown.find((keyDown) => keyDown === item.key) ? 'activeHistory' : ''
							}`}
							style={{ width: item.width }}>
							{item.title}
						</div>
					);
				})}
			</React.Fragment>
		);
	};

	const [keyDown, setKeyDown] = React.useState<string[]>([]);
	const [historyDown, setHistoryDown] = React.useState<string[]>([]);

	React.useEffect(() => {
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

		window.addEventListener('keydown', handleUserKeyDown);
		window.addEventListener('keyup', handleUserKeyUp);

		window.addEventListener('keydown', function (e: KeyboardEvent) {
			if (
				e.keyCode === 9 ||
				e.keyCode === 91 ||
				e.keyCode === 93 ||
				e.keyCode === 112 ||
				e.keyCode === 114 ||
				e.keyCode === 116 ||
				e.keyCode === 117 ||
				e.keyCode === 118 ||
				e.keyCode === 122 ||
				e.keyCode === 121 ||
				e.keyCode === 123
			) {
				e.preventDefault();
			}
		});
		document.oncontextmenu = function (e) {
			e.preventDefault();
			return false;
		};
	}, []);

	return (
		<div className='keyboard-background-default'>
			{keyboard.map((item, index: number) => {
				return (
					<React.Fragment key={index}>
						<div className='container'>
							{item.lineOne?.map((item, index: number) => {
								return (
									<div key={index} className='group'>
										{groupItem(item.groupOne)}
										{groupItem(item.groupTwo)}
										{groupItem(item.groupThree)}
										{groupItem(item.groupFour)}
										{groupItem(item.groupFive)}
									</div>
								);
							})}
						</div>
						<div className='container'>
							{item.lineTwo?.map((item, index: number) => {
								return (
									<div key={index} className='group'>
										{groupItem(item.groupOne)}
										{groupItem(item.groupTwo)}
									</div>
								);
							})}
						</div>
						<div className='container'>
							{item.lineThree?.map((item, index: number) => {
								return (
									<div key={index} className='group'>
										{groupItem(item.groupOne)}
										{groupItem(item.groupTwo)}
									</div>
								);
							})}
						</div>
						<div className='container'>
							{item.lineFour?.map((item, index: number) => {
								return (
									<div key={index} className='group'>
										{groupItem(item.groupOne)}
										{groupItem(item.groupTwo)}
									</div>
								);
							})}
						</div>
						<div className='container'>
							{item.lineFive?.map((item, index: number) => {
								return (
									<div key={index} className='group'>
										{groupItem(item.groupOne)}
										{groupItem(item.groupTwo)}
									</div>
								);
							})}
						</div>
						<div className='container'>
							{item.lineSix?.map((item, index: number) => {
								return (
									<div key={index} className='group'>
										{groupItem(item.groupOne)}
										{groupItem(item.groupTwo)}
									</div>
								);
							})}
						</div>
					</React.Fragment>
				);
			})}
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
