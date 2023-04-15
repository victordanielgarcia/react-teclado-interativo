import React from 'react';

import { keyboard } from '../functions/keys';

import Line from './line';

interface KeyBoardProps {
	keyDown: string[];
	historyDown: string[];
}

const KeyBoard: React.FC<KeyBoardProps> = ({ keyDown, historyDown }) => {
	return (
		<div className='keyboard'>
			{keyboard.map((item, index: number) => {
				return (
					<React.Fragment key={index}>
						<div className='container'>
							<Line item={item.lineOne} keyDown={keyDown} historyDown={historyDown} />
						</div>
						<div className='container'>
							<Line item={item.lineTwo} keyDown={keyDown} historyDown={historyDown} />
						</div>
						<div className='container'>
							<Line item={item.lineThree} keyDown={keyDown} historyDown={historyDown} />
						</div>
						<div className='container'>
							<Line item={item.lineFour} keyDown={keyDown} historyDown={historyDown} />
						</div>
						<div className='container'>
							<Line item={item.lineFive} keyDown={keyDown} historyDown={historyDown} />
						</div>
						<div className='container'>
							<Line item={item.lineSix} keyDown={keyDown} historyDown={historyDown} />
						</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default KeyBoard;
