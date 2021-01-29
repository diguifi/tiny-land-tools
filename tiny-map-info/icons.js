const Color = {
    'White' : '#FCFCFC',
    'White2' : '#F8F8F8',
    'LightGrey' : '#bcbcbc',
    'Grey' : '#787878',
    'DarkGrey' : '#7c7c7c',
    'Black' : '#000000',
  
    'LightRed' : '#e40058',
    'Red' : '#a80020',
    'DarkRed' : '#a81000',
    'Wine' : '#881400',
  
    'LightBrown' : '#ac7c00',
    'Brown' : '#503000',
  
    'LightOrange' : '#f87858',
    'Orange' : '#e45c10',
    'DarkOrange' : '#f83800',
  
    'LightYellow' : '#f0d0b0',
    'LightYellow2' : '#fce0a8',
    'LightYellow3' : '#f8d878',
    'Yellow' : '#f8b800',
    'DarkYellow' : '#fca044',
  
    'LightGreen' : '#b8f8d8',
    'LightGreen2' : '#b8f8b8',
    'LightGreen3' : '#d8f878',
    'LightGreen4' : '#b8f818',
    'LightGreen5' : '#58f898',
    'LightGreen6' : '#58d854',
    'Green' : '#00b800',
    'Green2' : '#00a800',
    'Green3' : '#00a844',
    'Green4' : '#007800',
    'DarkGreen' : '#006800',
    'DarkGreen2' : '#005800',
  
    'GreenBlue' : '#00fcfc',
    'GreenBlue2' : '#00e8d8',
    'GreenBlue3' : '#008888',
    'DarkGreenBlue' : '#004058',

    'LightBlue' : '#a4e4fc',
    'Blue' : '#3cbcfc',
    'Blue2' : '#6888fc',
    'Blue3' : '#0078f8',
    'Blue4' : '#0058f8',
    'DarkBlue' : '#0000fc',
    'DarkBlue2' : '#0000bc',
  
    'LightPurple' : '#b8b8f8',
    'LightPurple2' : '#9878f8',
    'Purple' : '#6844fc',
    'DarkPurple' : '#4428bc',
    
    'LightPink' : '#f8d8f8',
    'LightPink2' : '#d8b8f8',
    'LightPink3' : '#f8b8f8',
    'Pink' : '#f8a4c0',
    'Pink2' : '#f878f8',
    'Pink3' : '#f85898',
    'DarkPink' : '#d800cc',
    'DarkPink2' : '#940084',
}

const Icons = {
    Quest: [[0,0,Color.White2,Color.White2,0,0,0,Color.White2,Color.White2,0,0,0,Color.White2,Color.White2,0,0],
	[0,Color.White2,Color.Blue4,Color.Blue4,Color.White2,Color.White2,0,Color.Blue4,Color.Blue4,0,Color.White2,Color.White2,Color.Blue4,Color.Blue4,Color.White2,0],
	[Color.White2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.White2,Color.Blue4,Color.Blue4,Color.White2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.White2],
	[Color.White2,Color.DarkBlue,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.DarkBlue,Color.White2],
	[0,Color.White2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.LightYellow3,Color.LightYellow3,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.White2,0],
	[0,Color.White2,Color.DarkBlue,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.LightYellow3,Color.LightYellow3,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.DarkBlue,Color.White2,0],
	[0,0,Color.White2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.LightYellow3,Color.LightYellow3,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.White2,0,0],
	[Color.White2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.LightYellow3,Color.LightYellow3,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.White2],
	[Color.White2,Color.DarkBlue2,Color.DarkBlue2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Yellow,Color.Yellow,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.DarkBlue2,Color.DarkBlue2,Color.White2],
	[0,0,Color.White2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.White2,0,0],
	[0,Color.White2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.LightYellow3,Color.LightYellow3,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.White2,0],
	[0,Color.White2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Yellow,Color.Yellow,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.White2,0],
	[Color.White2,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.Blue4,Color.White2],
	[Color.White2,Color.DarkBlue2,Color.DarkBlue2,Color.Blue4,Color.DarkBlue2,Color.DarkBlue2,Color.White2,Color.Blue4,Color.Blue4,Color.White2,Color.DarkBlue2,Color.DarkBlue2,Color.Blue4,Color.DarkBlue2,Color.DarkBlue2,Color.White2],
	[0,Color.White2,Color.DarkBlue2,Color.DarkBlue2,Color.White2,Color.White2,0,Color.DarkBlue2,Color.DarkBlue2,0,Color.White2,Color.White2,Color.DarkBlue2,Color.DarkBlue2,Color.White2,0],
    [0,0,Color.White2,Color.White2,0,0,0,Color.White2,Color.White2,0,0,0,Color.White2,Color.White2,0,0],],
    Merchant: [[0,0,0,0,0,Color.White2,Color.White2,Color.White2,Color.White2,Color.White2,Color.White2,0,0,0,0,0],
	[0,0,0,0,Color.White2,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.White2,0,0,0,0],
	[0,0,0,Color.White2,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.White2,0,0,0],
	[0,0,Color.White2,Color.LightBrown,Color.LightBrown,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.LightBrown,Color.LightBrown,Color.White2,0,0],
	[0,Color.White2,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.DarkOrange,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkOrange,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.White2,0],
	[Color.White2,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.White2],
	[Color.White2,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.White2],
	[Color.White2,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.White2],
	[Color.White2,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.White2],
	[Color.White2,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.White2],
	[Color.White2,Color.Brown,Color.LightBrown,Color.LightBrown,Color.DarkOrange,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkOrange,Color.LightBrown,Color.LightBrown,Color.Brown,Color.White2],
	[0,Color.White2,Color.Brown,Color.LightBrown,Color.LightBrown,Color.DarkOrange,Color.DarkOrange,Color.DarkOrange,Color.DarkOrange,Color.DarkOrange,Color.DarkOrange,Color.LightBrown,Color.LightBrown,Color.Brown,Color.White2,0],
	[0,0,Color.White2,Color.Brown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown,Color.White2,0,0],
	[0,0,0,Color.White2,Color.Brown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown,Color.White2,0,0,0],
	[0,0,0,0,Color.White2,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.White2,0,0,0,0],
	[0,0,0,0,0,Color.White2,Color.White2,Color.White2,Color.White2,Color.White2,Color.White2,0,0,0,0,0],],
}

const IconsCoords = [
    {
        Icons: [Icons.Quest],
        Coords: [4,1],
        Names: ['Flower for Mytklash']
    },
    {
        Icons: [Icons.Quest],
        Coords: [8,1],
        Names: ['Help the Lake Village']
    },
    {
        Icons: [Icons.Quest],
        Coords: [6,5],
        Names: ['The Sacred Stone']
    },
    {
        Icons: [Icons.Quest],
        Coords: [1,7],
        Names: ['Warrior someday']
    },
    {
        Icons: [Icons.Quest],
        Coords: [0,8],
        Names: ['Damn Rats!']
    },
    {
        Icons: [Icons.Quest],
        Coords: [8,9],
        Names: ['Jamuls Machete','Zombie Killer']
    },
]