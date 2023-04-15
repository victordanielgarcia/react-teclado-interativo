import React from 'react';

import { IGroup } from '../functions/keys';

import Group from './group';

interface LineProps {
	item: IGroup[] | undefined;
	keyDown: string[];
	historyDown: string[];
}

const Line: React.FC<LineProps> = ({ item, keyDown, historyDown }) => {
	return (
		<React.Fragment>
			{item?.map((item, index: number) => {
				return (
					<div key={index} className='group'>
						<Group item={item?.groupOne} keyDown={keyDown} historyDown={historyDown} />
						<Group item={item?.groupTwo} keyDown={keyDown} historyDown={historyDown} />
						<Group item={item?.groupThree} keyDown={keyDown} historyDown={historyDown} />
						<Group item={item?.groupFour} keyDown={keyDown} historyDown={historyDown} />
						<Group item={item?.groupFive} keyDown={keyDown} historyDown={historyDown} />
						<Group item={item?.groupSix} keyDown={keyDown} historyDown={historyDown} />
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default Line;
