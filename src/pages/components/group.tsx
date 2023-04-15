import React from 'react';

import Icons from '../../components/icons/icons';

import { IContent } from '../functions/keys';

interface GroupProps {
	item: IContent[] | undefined;
	keyDown: string[];
	historyDown: string[];
}

const Group: React.FC<GroupProps> = ({ item, keyDown, historyDown }) => {
	return (
		<React.Fragment>
			{item?.map((item: IContent, index: number) => {
				const keyDownItem = keyDown.find((keyDown) => keyDown === item.key) ? 'activeDown' : '';
				const historyDownItem = historyDown.find((keyDown) => keyDown === item.key) ? 'activeHistory' : '';
				const title = item.title === '' ? 'empty' : '';
				const customStyle = item.customStyle ? item.customStyle : '';

				return (
					<div key={index} className={`default-key ${customStyle} ${keyDownItem} ${historyDownItem} ${title}`} style={{ width: item.width }}>
						{item.title ? item.title : <Icons className='icon' iconName={item.icon ? item.icon : ''} />}
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default Group;
