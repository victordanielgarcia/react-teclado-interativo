import * as React from 'react';

import { Button } from 'primereact/button';

import Description from './components/description';
import Footer from './components/footer';
import Header from './components/header';
import KeyBoard from './components/keyboard';

import { handleKeyDown, handleKeyUp } from './functions/functions';

import './index.scss';

const Index: React.FC = () => {
	const [keyDown, setKeyDown] = React.useState<string[]>([]);
	const [historyDown, setHistoryDown] = React.useState<string[]>([]);

	return (
		<div
			className='keyboard-background-default'
			tabIndex={0}
			onKeyDown={(event) => handleKeyDown(event, keyDown, historyDown, setHistoryDown, setKeyDown)}
			onKeyUp={(event) => handleKeyUp(event, keyDown, setKeyDown)}>
			<Header />
			<div className='container-calc'>
				<div className='navbar'>
					<Button
						label='Limpar'
						severity='warning'
						icon='pi pi-replay'
						iconPos='right'
						onClick={() => {
							setKeyDown([]);
							setHistoryDown([]);
						}}
					/>
				</div>
				<KeyBoard keyDown={keyDown} historyDown={historyDown} />
				<Description />
			</div>
			<Footer />
		</div>
	);
};

export default Index;
