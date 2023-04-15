export interface IContent {
	title?: string;
	icon?: string;
	key?: string;
	width?: string;
	customStyle?: string;
}

export interface IGroup {
	groupOne?: IContent[];
	groupTwo?: IContent[];
	groupThree?: IContent[];
	groupFour?: IContent[];
	groupFive?: IContent[];
	groupSix?: IContent[];
}

export interface IKeyboard {
	lineOne?: IGroup[];
	lineTwo?: IGroup[];
	lineThree?: IGroup[];
	lineFour?: IGroup[];
	lineFive?: IGroup[];
	lineSix?: IGroup[];
}

export const keyboard: IKeyboard[] = [
	{
		lineOne: [
			{ groupOne: [{ title: 'Esc', key: '27' }] },
			{
				groupTwo: [
					{ title: 'F1', key: '112' },
					{ title: 'F2', key: '113' },
					{ title: 'F3', key: '114' },
					{ title: 'F4', key: '115' },
				],
			},
			{
				groupThree: [
					{ title: 'F5', key: '116' },
					{ title: 'F6', key: '117' },
					{ title: 'F7', key: '118' },
					{ title: 'F8', key: '119' },
				],
			},
			{
				groupFour: [
					{ title: 'F9', key: '120' },
					{ title: 'F10', key: '121' },
					{ title: 'F11', key: '122' },
					{ title: 'F12', key: '123' },
				],
			},
			{
				groupFive: [
					{ title: 'Prtsc', key: '0' },
					{ title: 'Scrlk', key: '145' },
					{ title: 'Pause', key: '19' },
				],
			},
			{
				groupSix: [{ title: '' }, { title: '' }, { title: '' }, { title: '' }],
			},
		],
	},
	{
		lineTwo: [
			{
				groupOne: [
					{ title: `' "`, key: '192' },
					{ title: '1 !', key: '49' },
					{ title: '2 @', key: '50' },
					{ title: '3 #', key: '51' },
					{ title: '4 $', key: '52' },
					{ title: '5 $', key: '53' },
					{ title: '6 $', key: '54' },
					{ title: '7 $', key: '55' },
					{ title: '8 $', key: '56' },
					{ title: '9 $', key: '57' },
					{ title: '0 $', key: '48' },
					{ title: '- -', key: '189' },
					{ title: '+ =', key: '187' },
					{ icon: 'BsArrowLeft', key: '8', width: '5.6rem' },
				],
			},
			{
				groupTwo: [
					{ title: 'Insert', key: '45' },
					{ title: 'Home', key: '36' },
					{ title: 'Page Up', key: '33' },
				],
			},
			{
				groupThree: [
					{ title: 'Num Lock', key: '144' },
					{ title: '/', key: '111' },
					{ title: '*', key: '106' },
					{ title: '-', key: '109' },
				],
			},
		],
	},
	{
		lineThree: [
			{
				groupOne: [
					{ title: 'Tab', key: '9', width: '4.1rem' },
					{ title: 'Q', key: '81' },
					{ title: 'W', key: '87' },
					{ title: 'E', key: '69' },
					{ title: 'R', key: '82' },
					{ title: 'T', key: '84' },
					{ title: 'Y', key: '89' },
					{ title: 'U', key: '85' },
					{ title: 'I', key: '73' },
					{ title: 'O', key: '79' },
					{ title: 'P', key: '80' },
					{ title: '-', key: '219' },
					{ title: '[ }', key: '221' },
					{ icon: 'BsArrowReturnLeft', key: '13', width: '4rem' },
				],
			},
			{
				groupTwo: [
					{ title: 'Del', key: '46' },
					{ title: 'End', key: '35' },
					{ title: 'Page Down', key: '34' },
				],
			},
			{
				groupThree: [
					{ title: '7', key: '103' },
					{ title: '8', key: '104' },
					{ title: '9', key: '105' },
					{ title: '+', key: '107' },
				],
			},
		],
	},
	{
		lineFour: [
			{
				groupOne: [
					{ title: 'Capslock', key: '20', width: '5rem' },
					{ title: 'A', key: '65' },
					{ title: 'S', key: '83' },
					{ title: 'D', key: '68' },
					{ title: 'F', key: '70' },
					{ title: 'G', key: '71' },
					{ title: 'H', key: '72' },
					{ title: 'J', key: '74' },
					{ title: 'K', key: '75' },
					{ title: 'L', key: '76' },
					{ title: 'Ç', key: '186' },
					{ title: '~ ^', key: '222' },
					{ title: '] {', key: '220' },
					{ title: ' ', key: '13', width: '3.1rem', customStyle: 'enter' },
				],
			},
			{
				groupTwo: [{ title: '', width: '8.3rem' }],
			},
			{
				groupThree: [
					{ title: '4', key: '100' },
					{ title: '5', key: '101' },
					{ title: '6', key: '102' },
					{ title: '.', key: '110' },
				],
			},
		],
	},
	{
		lineFive: [
			{
				groupOne: [
					{ title: 'Shift', key: '16', width: '4.05rem' },
					{ title: '|', key: '226' },
					{ title: 'Z', key: '90' },
					{ title: 'X', key: '88' },
					{ title: 'C', key: '67' },
					{ title: 'V', key: '86' },
					{ title: 'B', key: '66' },
					{ title: 'N', key: '78' },
					{ title: 'M', key: '77' },
					{ title: ', <', key: '188' },
					{ title: '. >', key: '190' },
					{ title: '; :', key: '191' },
					{ title: '/ ?', key: '193' },
					{ title: 'Shift', key: '16', width: '4.05rem' },
				],
			},
			{ groupTwo: [{ title: '' }, { icon: 'GoArrowUp', key: '38' }, { title: '' }] },
			{
				groupThree: [
					{ title: '1', key: '97' },
					{ title: '2', key: '98' },
					{ title: '3', key: '99' },
					{ title: 'Enter', key: '13' },
				],
			},
		],
	},
	{
		lineSix: [
			{
				groupOne: [
					{ title: 'Ctrl', key: '17' },
					{ icon: 'FaWindows', key: '91' },
					{ title: 'Alt', key: '18' },
					{ title: 'Space', key: '32', width: '23rem' },
					{ title: 'AltGr', key: '18' },
					{ icon: 'FaWindows', key: '91' },
					{ title: 'Prnt', key: '93' },
					{ title: 'Ctrl', key: '17' },
				],
			},
			{
				groupTwo: [
					{ icon: 'GoArrowLeft', key: '37' },
					{ icon: 'GoArrowDown', key: '40' },
					{ icon: 'GoArrowRight', key: '39' },
				],
			},
			{
				groupThree: [
					{ title: '0', key: '96', customStyle: 'keyZeroRight' },
					{ title: ' ', key: '96', customStyle: 'keyZeroLeft' },
					{ title: 'Del', key: '46' },
					{ title: ' ', key: '13', customStyle: 'enter' },
				],
			},
		],
	},
];
