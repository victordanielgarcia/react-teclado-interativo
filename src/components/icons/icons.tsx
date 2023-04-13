import './icons.scss';
import React from 'react';
import { BsArrowLeft, BsArrowReturnLeft } from 'react-icons/bs';
import { FaWindows } from 'react-icons/fa';
import { GoArrowDown, GoArrowLeft, GoArrowRight, GoArrowUp } from 'react-icons/go';

interface BasicIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	iconName: string;
}

interface IIcons {
	[string: string]: React.ReactElement;
}

const Icons: React.FC<BasicIconProps> = ({ iconName, ...props }) => {
	const icons: IIcons = {
		FaWindows: <FaWindows />,
		GoArrowDown: <GoArrowDown />,
		GoArrowLeft: <GoArrowLeft />,
		GoArrowRight: <GoArrowRight />,
		GoArrowUp: <GoArrowUp />,
		BsArrowLeft: <BsArrowLeft />,
		BsArrowReturnLeft: <BsArrowReturnLeft />,
	};

	return <i {...props}> {icons[iconName]}</i>;
};

export default Icons;
