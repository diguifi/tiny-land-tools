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

const Tiles = {
    Tree: [[0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen2,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen2],
	[0               ,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],],
    SmallTree: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ],
	[0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ],
	[0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ],
	[0               ,0               ,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],],
    
  River: [[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],],
  River2: [[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.LightBlue ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.LightBlue ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],],
  River3: [[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.LightBlue ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],],
  FenceV: [[0               ,0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ,0               ],
	[0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ],
	[0               ,0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ],
	[0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ,0               ],
	[0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ],
	[0               ,0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ,0               ],
	[0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ],
	[0               ,0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ,0               ],],
  FenceH: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,Color.DarkGreen ,Color.DarkGreen ,0               ,Color.DarkGreen ,0               ,Color.DarkGreen ,0               ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[0               ,Color.DarkGreen ,0               ,Color.DarkGreen ,Color.DarkGreen ,0               ,Color.DarkGreen ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
  FenceC: [[0               ,0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ,0               ],
	[0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[0               ,0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,0               ,Color.DarkGreen ,0               ],
	[0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.DarkGreen ,Color.DarkGreen ,0               ,0               ,0               ],],
  GnomeHouse: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.DarkGreen2,Color.DarkGreen2,0               ,0               ,0               ],
	[0               ,0               ,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,0               ,0               ],
	[0               ,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,0               ],
	[Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.Brown     ,Color.Brown     ,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2],
	[Color.DarkGreen2,Color.DarkGreen2,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.DarkGreen2,Color.DarkGreen2],
	[0               ,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.Brown     ,Color.Brown     ,0               ],],
  Wood: [[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],],
  Leaves: [[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.Green4    ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.Green4    ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.Green4    ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],
	[Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ],],
  VillageHouse: [[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.LightBrown],
	[Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.LightBrown],],
  GoblinHouse: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,Color.Green4    ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Green4    ,Color.Green4    ,0               ,0               ,0               ],
	[0               ,0               ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,0               ,0               ],
	[0               ,0               ,Color.Green4    ,Color.DarkGreen    ,Color.DarkGreen2,Color.Green4    ,0               ,0               ],
	[0               ,Color.Green4    ,Color.Green4    ,Color.DarkGreen2,Color.DarkGreen2,Color.Green4    ,Color.Green4    ,0               ],
	[Color.Green4    ,Color.Green4    ,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.DarkGreen2,Color.Green4    ,Color.Green4    ],],
  Brick1: [[Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ],
	[Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ,Color.Black     ],
	[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ],
	[Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Black     ],
	[Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ],
	[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Black     ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],
	[Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,Color.Grey      ],
	[Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ],],
  Brick2: [[Color.DarkGrey  ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Black     ],
	[Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ,Color.Black     ],
	[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ],
	[Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Black     ],
	[Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ],
	[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Black     ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],
	[Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,Color.Grey      ],
	[Color.DarkGrey  ,Color.Grey      ,Color.Grey      ,Color.Black     ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.DarkGrey  ],],
  DungeonDoor: [[Color.Grey      ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Grey      ],
	[Color.Brown     ,Color.Yellow    ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Yellow    ,Color.Brown     ],
	[Color.Brown     ,Color.LightBrown,Color.Yellow    ,Color.LightBrown,Color.LightBrown,Color.Yellow    ,Color.LightBrown,Color.Brown     ],
	[Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.Yellow    ,Color.Yellow    ,Color.LightBrown,Color.LightBrown,Color.Brown     ],
	[Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.Yellow    ,Color.Yellow    ,Color.LightBrown,Color.Black     ,Color.Brown     ],
	[Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.Yellow    ,Color.Yellow    ,Color.LightBrown,Color.LightBrown,Color.Brown     ],
	[Color.Brown     ,Color.LightBrown,Color.Yellow    ,Color.LightBrown,Color.LightBrown,Color.Yellow    ,Color.LightBrown,Color.Brown     ],
	[Color.Brown     ,Color.Yellow    ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Yellow    ,Color.Brown     ],],
  Cactus1: [[0               ,0               ,0               ,Color.Green4    ,Color.DarkGreen2,0               ,0               ,0               ],
	[0               ,Color.DarkGreen ,0               ,Color.DarkGreen ,Color.Green4    ,0               ,Color.Green4    ,0               ],
	[0               ,Color.Green4    ,0               ,Color.Green4    ,Color.Green4    ,0               ,Color.DarkGreen2,0               ],
	[0               ,Color.Green4    ,0               ,Color.DarkGreen2,Color.Green4    ,Color.Green4    ,Color.Green4    ,0               ],
	[0               ,Color.Green4    ,0               ,Color.Green4    ,Color.Green4    ,0               ,0               ,0               ],
	[0               ,Color.DarkGreen ,Color.Green4    ,Color.DarkGreen ,Color.Green4    ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Green4    ,Color.Green4    ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Green4    ,Color.DarkGreen ,0               ,0               ,0               ],],
  Cactus2: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.DarkGreen ,Color.Green4    ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Green4    ,Color.DarkGreen ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Green4    ,Color.Green4    ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.DarkGreen ,Color.Green4    ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Green4    ,Color.Green4    ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Green4    ,Color.DarkGreen ,0               ,0               ,0               ],],
  MerchantTent: [[0               ,0               ,0               ,Color.LightYellow3,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,Color.LightYellow3,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,Color.LightYellow3,Color.LightYellow3,0               ,0               ],
	[0               ,0               ,0               ,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,0               ,0               ],
	[0               ,0               ,0               ,Color.LightYellow3,Color.Yellow    ,Color.LightYellow3,Color.LightYellow3,0               ],
	[0               ,0               ,Color.LightYellow3,Color.LightYellow3,Color.Yellow    ,Color.LightYellow3,Color.LightYellow3,0               ],
	[0               ,Color.LightYellow3,Color.LightYellow3,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.LightYellow3,Color.LightYellow3],
	[Color.LightYellow3,Color.LightYellow3,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.LightYellow3,Color.LightYellow3],],
  Car: [[0               ,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,0               ],
	[Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3],
	[Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3],
	[Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3],
	[Color.Brown     ,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.Brown     ],
	[Color.LightBrown,Color.Brown     ,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.Brown     ,Color.LightBrown],
	[Color.LightBrown,0               ,Color.LightBrown,0               ,0               ,Color.LightBrown,0               ,Color.LightBrown],
	[0               ,Color.LightBrown,0               ,0               ,0               ,0               ,Color.LightBrown,0               ],],
  WallV: [[0               ,0               ,Color.Black     ,Color.Grey      ,Color.DarkGrey  ,Color.Black     ,0               ,0               ],
	[0               ,0               ,Color.Black     ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,0               ,0               ],
	[0               ,0               ,Color.Black     ,Color.DarkGrey  ,Color.Grey      ,Color.Black     ,0               ,0               ],
	[0               ,0               ,Color.Black     ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,0               ,0               ],
	[0               ,0               ,Color.Black     ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,0               ,0               ],
	[0               ,0               ,Color.Black     ,Color.Grey      ,Color.DarkGrey  ,Color.Black     ,0               ,0               ],
	[0               ,0               ,Color.Black     ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,0               ,0               ],
	[0               ,0               ,Color.Black     ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,0               ,0               ],],
  WallH: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ],
	[Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ],
	[Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ,Color.Grey      ],
	[Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
  WallC: [[Color.Black     ,Color.Black     ,Color.Black     ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,Color.Black     ,Color.Black     ],
	[Color.Black     ,Color.DarkGrey  ,Color.Black     ,Color.DarkGrey  ,Color.Grey      ,Color.Black     ,Color.DarkGrey  ,Color.Black     ],
	[Color.Black     ,Color.Black     ,Color.Black     ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,Color.Black     ,Color.Black     ],
	[Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ],
	[Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ],
	[Color.Black     ,Color.Black     ,Color.Black     ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,Color.Black     ,Color.Black     ],
	[Color.Black     ,Color.DarkGrey  ,Color.Black     ,Color.DarkGrey  ,Color.Grey      ,Color.Black     ,Color.DarkGrey  ,Color.Black     ],
	[Color.Black     ,Color.Black     ,Color.Black     ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Black     ,Color.Black     ,Color.Black     ],],
  CityHouse1: [[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color. DarkYellow,Color. DarkYellow,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color.Brown     ],
	[0               ,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,0               ],
	[0               ,Color. DarkYellow,Color.Brown,Color. DarkYellow,Color.Brown,Color.Brown,Color. DarkYellow,0               ],
	[0               ,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color.Brown,Color.Brown,Color. DarkYellow,0               ],],
  CityHouse2: [[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Orange    ,Color.Orange    ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Orange    ,Color.Orange    ,Color.Orange    ,Color.Orange    ,Color.Brown     ],
	[0               ,Color.Orange    ,Color.Orange    ,Color.Orange    ,Color.Orange    ,Color.Orange    ,Color.Orange    ,0               ],
	[0               ,Color.Orange    ,Color.Brown     ,Color.Orange    ,Color.Brown     ,Color.Brown     ,Color.Orange    ,0               ],
	[0               ,Color.Orange    ,Color.Orange    ,Color.Orange    ,Color.Brown     ,Color.Brown     ,Color.Orange    ,0               ],],
  CityHouse3: [[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown     ],
	[0               ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,0               ],
	[0               ,Color.LightBrown,Color.Brown     ,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.LightBrown,0               ],
	[0               ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.LightBrown,0               ],],
  CityHouse4: [[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color.Brown     ],
	[Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color.Brown     ,Color.Brown     ,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow],
	[Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color.Brown     ,Color.Brown     ,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow],
	[Color. DarkYellow,Color. DarkYellow,Color. DarkYellow,Color.Brown     ,Color.Brown     ,Color. DarkYellow,Color. DarkYellow,Color. DarkYellow],],
  CityHouse5: [[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown     ],
	[Color.LightBrown,Color.LightBrown,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightBrown,Color.LightBrown],],
  CityHouseLargeFront: [[Color.Orange    ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[Color.Orange    ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.Brown     ],
	[Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,0               ],
	[Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.Brown     ,Color.Brown     ,Color.DarkYellow,0               ],
	[Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.Brown     ,Color.Brown     ,Color.DarkYellow,0               ],
	[Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.Brown     ,Color.Brown     ,Color.DarkYellow,0               ],],
  CityHouseLargeBack: [[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[0               ,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow],
	[0               ,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.Brown     ,Color.Brown     ,Color.DarkYellow],
	[0               ,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow],
	[0               ,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow],],
  Fountain: [[0               ,0               ,0               ,Color.LightBlue ,Color.LightBlue ,0               ,0               ,0               ],
	[0               ,0               ,Color.LightBlue ,Color.Grey      ,Color.Grey      ,Color.LightBlue ,0               ,0               ],
	[0               ,0               ,Color.LightBlue ,Color.Grey      ,Color.Grey      ,Color.LightBlue ,0               ,0               ],
	[0               ,Color.Grey      ,Color.LightBlue ,Color.Grey      ,Color.Grey      ,Color.Blue      ,Color.Grey      ,0               ],
	[0               ,Color.Grey      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.LightBlue ,Color.Grey      ,0               ],
	[0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
  Lamp: [[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,Color.LightGrey ,Color.LightYellow3,Color.LightYellow3,Color.LightGrey ,0               ,0               ],
	[0               ,0               ,Color.LightGrey ,Color.LightYellow3,Color.LightYellow3,Color.LightGrey ,0               ,0               ],
	[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],],
  MerchantCart: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[0               ,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.LightBrown,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.Brown     ],
	[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.LightBrown,Color.Brown     ,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.Brown     ,Color.Brown     ,0               ,0               ,Color.LightBrown,0               ],],
  CityTent: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[Color.DarkYellow,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.DarkYellow],
	[Color.DarkYellow,0               ,0               ,0               ,0               ,0               ,0               ,Color.DarkYellow],
	[Color.DarkYellow,0               ,0               ,0               ,0               ,0               ,0               ,Color.DarkYellow],
	[Color.DarkYellow,0               ,0               ,0               ,0               ,0               ,0               ,Color.DarkYellow],],
  FullBucket: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.LightGrey ,0               ,0               ,0               ,0               ],
	[0               ,0               ,Color.LightGrey ,0               ,Color.LightGrey ,0               ,0               ,0               ],
	[0               ,0               ,Color.Brown     ,Color.Blue      ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.LightBlue ,0               ,0               ],
	[0               ,Color.LightBlue ,0               ,0               ,Color.LightBlue ,Color.LightBlue ,Color.LightBlue ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
  FruitsBox: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,Color.Brown     ,Color.DarkOrange,Color.Orange    ,Color.DarkYellow,Color.LightYellow2,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.DarkYellow,Color.LightOrange,Color.Orange    ,Color.DarkOrange,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
  FruitsBox2: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,Color.Brown     ,Color.DarkGreen2,Color.Green2    ,Color.Green3    ,Color.LightGreen6,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Green3    ,Color.DarkGreen ,Color.Green4    ,Color.DarkGreen2,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
  FruitsBox3: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,Color.Brown     ,Color.DarkPink2 ,Color.DarkPink  ,Color.Pink2     ,Color.Pink      ,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Pink2     ,Color.Pink3     ,Color.DarkPink  ,Color.DarkPink2 ,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
  WoodenFenceV: [[0               ,0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ],],
  WoodenFenceH: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
  WoodenFenceC: [[0               ,0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ],
	[0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ],],
  PalmTree: [[0               ,0               ,0               ,0               ,0               ,Color.LightGreen6,0               ,0               ],
	[0               ,0               ,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.Green2    ,Color.LightGreen6,0               ],
	[0               ,Color.LightGreen6,Color.LightGreen6,0               ,Color.DarkYellow,Color.Green     ,Color.LightGreen6,Color.LightGreen6],
	[0               ,0               ,0               ,Color.Yellow    ,Color.Yellow    ,Color.Green     ,Color.LightGreen6,Color.LightGreen6],
	[0               ,0               ,Color.DarkYellow,Color.DarkYellow,0               ,Color.Green     ,0               ,Color.LightGreen6],
	[0               ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,0               ,0               ,0               ,Color.LightGreen6],
	[0               ,Color.DarkYellow,Color.DarkYellow,0               ,0               ,0               ,0               ,0               ],
	[Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,0               ,0               ,0               ,0               ,0               ],],
  DesertTent: [[0               ,0               ,0               ,Color.DarkYellow,Color.DarkYellow,0               ,0               ,0               ],
	[0               ,0               ,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,0               ,0               ],
	[0               ,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,0               ],
	[Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow,Color.DarkYellow],
	[Color.LightYellow3,Color.DarkYellow,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.LightYellow3,Color.DarkYellow,Color.LightYellow3],
	[Color.LightYellow3,Color.DarkYellow,Color.LightYellow3,Color.LightYellow3,0               ,Color.LightYellow3,Color.DarkYellow,Color.LightYellow3],
	[Color.LightYellow3,Color.DarkYellow,Color.LightYellow3,0               ,0               ,Color.LightYellow3,Color.DarkYellow,Color.LightYellow3],
	[Color.LightYellow3,Color.DarkYellow,Color.LightYellow3,0               ,0               ,Color.LightYellow3,Color.DarkYellow,Color.LightYellow3],],
  DesertWell: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ],
	[0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ],
	[0               ,0               ,Color.LightBrown,0               ,0               ,Color.LightBrown,0               ,0               ],
	[0               ,0               ,Color.LightBrown,0               ,0               ,Color.LightBrown,0               ,0               ],
	[0               ,Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,Color.DarkGrey  ,0               ],
	[0               ,Color.DarkGrey  ,Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,0               ],
	[0               ,Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,Color.DarkGrey  ,Color.Grey      ,Color.DarkGrey  ,0               ],],
  FlatGrass: [[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green    ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],],
    Grass: [[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green4, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green4, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green4, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green4, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],],
    Grass2: [[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],],
	Grass3: [[Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],],
    TallGrass: [[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ],
	[Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green4    ,Color.Green     ,Color.Green4    ,Color.Green     ],
    [Color.Green     ,Color.DarkGreen ,Color.Green     ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.Green     ,Color.Green     ],],
    TallGrass2: [[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green4    ,Color.Green4    ,Color.Green     ,Color.Green4    ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green     ,Color.Green     ],],
	TallGrass3: [[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ],
	[Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green4    ,Color.Green     ],
	[Color.Green4    ,Color.Green     ,Color.Green4    ,Color.Green4    ,Color.Green     ,Color.Green4    ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green     ,Color.Green4    ],
	[Color.Green     ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.Green     ],],
    Bush: [[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green4    ,Color.DarkGreen ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green     ,Color.Green     ],
	[Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.DarkGreen ,Color.Green4    ,Color.Green4    ,Color.Green     ],
	[Color.DarkGreen ,Color.Green4    ,Color.DarkGreen ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.DarkGreen ,Color.Green     ],
	[Color.Green     ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.DarkGreen ,Color.Green     ,Color.Green     ],],
    DirtLeft: [[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green2    ,Color.Green,Color.Green],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.Green2    ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green2    ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],],
    DirtRight: [[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green2    ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green     ,Color.Green     ],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green     ],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green     ],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green     ],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green2    ,Color.Green     ],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green2    ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.LightBrown,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],],
    DirtUp: [[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green2    ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.LightBrown,Color.LightBrown,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green2    ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green     ],
	[Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green     ],
	[Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green2    ],
	[Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],],
    DirtDown: [[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green     ,Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],],
    Dirt: [[Color.Green,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Green,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Green],],
    Rocks: [[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Grey, Color.Green, Color.Green],
	[Color.Green, Color.Grey, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Grey, Color.Green, Color.Green, Color.Grey, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
	[Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],],
    Rocks2: [[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Grey      ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Grey      ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],
	[Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ,Color.Green     ],],
  River: [[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],],
  River2: [[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.LightBlue ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.LightBlue ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],],
  River3: [[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.LightBlue ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],
	[Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ,Color.Blue      ],],
  PlainTree: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,0               ],
	[Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ],
	[Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ],
	[0               ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,0               ],
	[0               ,0               ,0               ,Color.LightBrown,Color.LightBrown,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.LightBrown,Color.LightBrown,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.LightBrown,Color.LightBrown,0               ,0               ,0               ],],
  SmallPlainTree: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
	[0               ,0               ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,0               ,0               ],
	[0               ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,0               ],
	[0               ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,0               ],
	[0               ,0               ,Color.Green4    ,Color.Green4    ,Color.Green4    ,Color.Green4    ,0               ,0               ],
	[0               ,0               ,0               ,Color.LightBrown,Color.LightBrown,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.LightBrown,Color.LightBrown,0               ,0               ,0               ],],
  PlainFlatGrass: [[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],],
  PlainGrass: [[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],],
  PlainGrass2: [[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],],
  PlainTallGrass: [[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.Green     ,Color.Green     ,Color.LightGreen6,Color.Green     ,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.Green2    ,Color.Green2    ,Color.Green2    ,Color.Green2    ,Color.LightGreen6,Color.LightGreen6],],
  PlainTallGrass2: [[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.LightGreen6],
	[Color.LightGreen6,Color.Green     ,Color.LightGreen6,Color.Green     ,Color.Green     ,Color.LightGreen6,Color.LightGreen6,Color.Green     ],
	[Color.LightGreen6,Color.LightGreen6,Color.Green     ,Color.Green     ,Color.Green     ,Color.LightGreen6,Color.Green     ,Color.LightGreen6],],
  Sand: [[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
  [Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],],
  SandGrass: [[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow3,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow3,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],],
  SandTallGrass: [[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.Yellow    ,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.Yellow    ,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.Yellow    ,Color.LightYellow2,Color.LightYellow2,Color.Yellow    ,Color.LightYellow2],
	[Color.LightYellow2,Color.Yellow    ,Color.LightYellow2,Color.Yellow    ,Color.LightYellow2,Color.Yellow    ,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.LightYellow2],],
  SandGreenGrass: [[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightGreen6,Color.LightGreen6,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightYellow2,Color.LightYellow2],],
  SandTallGreenGrass: [[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightGreen6,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2,Color.LightGreen6,Color.LightYellow2],
	[Color.LightYellow2,Color.LightYellow2,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightYellow2,Color.LightYellow2],
	[Color.LightYellow2,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightGreen6,Color.LightYellow2],],
  Concrete: [[Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ],
	[Color.DarkGrey  ,Color.Grey      ,Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ],
	[Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ],
	[Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ,Color.Grey      ,Color.DarkGrey  ],
	[Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ],
	[Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ],
	[Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.Grey      ,Color.Grey      ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ],
	[Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ],],
  ConcreteRoadV: [[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ],
	[Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],
	[Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ],
	[Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ],
	[Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],
	[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ],
	[Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ],
	[Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ],],
  ConcreteRoadH: [[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],
	[Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ],
	[Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ],
	[Color.Grey      ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],
	[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ],
	[Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ],
	[Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ],
	[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],],
  ConcreteRoadC: [[Color.Grey      ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],
	[Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ],
	[Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ],
	[Color.Grey      ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],
	[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.LightGrey ,Color.Grey      ,Color.Grey      ],
	[Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ],
	[Color.LightGrey ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ],
	[Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.LightGrey ,Color.LightGrey ,Color.Grey      ],],
Stairs: [[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown],
	[Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown],
	[Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown],],
Clock: [[0,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0],
	[Color.Brown,Color.Brown,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.Brown,Color.Brown],
	[Color.Brown,Color.LightYellow2,Color.LightYellow2,Color.Black,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.Brown],
	[Color.Brown,Color.LightYellow2,Color.LightYellow2,Color.Black,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.Brown],
	[Color.Brown,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.Black,Color.LightYellow2,Color.LightYellow2,Color.Brown],
	[Color.Brown,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.Brown],
	[Color.Brown,Color.Brown,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.LightYellow2,Color.Brown,Color.Brown],
	[0,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0],],
ClockBody: [[Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown],
	[0,Color.Brown,Color.LightBrown,Color.Yellow,Color.LightBrown,Color.LightBrown,Color.Brown,0],
	[0,Color.Brown,Color.LightBrown,Color.Yellow,Color.LightBrown,Color.LightBrown,Color.Brown,0],
	[0,Color.Brown,Color.LightBrown,Color.Yellow,Color.LightBrown,Color.LightBrown,Color.Brown,0],
	[0,Color.Brown,Color.LightBrown,Color.Yellow,Color.Yellow,Color.LightBrown,Color.Brown,0],
	[0,Color.Brown,Color.LightBrown,Color.Yellow,Color.Yellow,Color.LightBrown,Color.Brown,0],
	[0,Color.Brown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown,0],
	[Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown],],
Carpet: [[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],],
Carpet1: [[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],
	[Color.Red,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],],
Carpet2: [[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.DarkRed],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red],],
Carpet3: [[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.Yellow,Color.DarkRed],
	[Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],],
Carpet4: [[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.DarkRed,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.DarkRed,Color.Yellow,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],],
Carpet5: [[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.DarkRed,Color.Yellow,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.DarkRed,Color.Yellow,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed],
	[Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],],
Carpet6: [[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.Yellow,Color.DarkRed],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Yellow,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Yellow,Color.Red],
	[Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.Yellow,Color.DarkRed],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow,Color.Red],],
Carpet7: [[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.DarkRed,Color.Red],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.DarkRed,Color.Red],
	[Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],],
Carpet8: [[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.Red],
	[Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.DarkRed],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.DarkRed],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.Red,Color.DarkRed,Color.DarkRed,Color.DarkRed],
	[Color.Red,Color.DarkRed,Color.Red,Color.Red,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed],
	[Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow,Color.Yellow],
	[Color.Red,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed,Color.DarkRed],],
Chain: [[0,0,0,Color.LightGrey,0,Color.LightGrey,0,0],
	[0,0,0,Color.LightGrey,0,Color.LightGrey,0,0],
	[0,0,0,0,Color.LightGrey,0,0,0],
	[0,0,0,0,Color.LightGrey,0,0,0],
	[0,0,0,Color.LightGrey,0,Color.LightGrey,0,0],
	[0,0,0,Color.LightGrey,0,Color.LightGrey,0,0],
	[0,0,0,0,Color.LightGrey,0,0,0],
	[0,0,0,0,Color.LightGrey,0,0,0],],
Chandelier: [[0,0,0,0,Color.LightGrey,0,0,0],
	[Color.Yellow,0,0,Color.Yellow,Color.LightGrey,0,Color.Yellow,0],
	[Color.LightYellow3,0,0,Color.LightYellow3,Color.LightGrey,0,Color.LightYellow3,0],
	[Color.LightYellow3,0,0,Color.LightYellow3,Color.LightGrey,0,Color.LightYellow3,0],
	[Color.Grey,0,0,Color.Grey,Color.LightGrey,0,Color.Grey,0],
	[Color.Grey,Color.Grey,Color.Grey,Color.Grey,Color.Grey,Color.Grey,Color.Grey,0],
	[0,Color.Grey,Color.Grey,0,Color.Grey,Color.Grey,0,0],
	[0,0,0,0,0,0,0,0],],
WallCarpet: [[0,Color.Yellow,Color.Red,Color.Red,Color.Red,Color.Red,Color.Red,Color.Yellow],
	[0,Color.LightYellow3,Color.Red,Color.Yellow,Color.Red,Color.Yellow,Color.Red,Color.LightYellow3],
	[0,Color.Yellow,Color.Red,Color.Yellow,Color.Yellow,Color.Yellow,Color.Red,Color.Yellow],
	[0,Color.LightYellow3,Color.Red,Color.Yellow,Color.Yellow,Color.Yellow,Color.Red,Color.LightYellow3],
	[0,Color.Yellow,Color.Red,Color.Red,Color.Yellow,Color.Red,Color.Red,Color.Yellow],
	[0,0,Color.LightYellow3,Color.Red,Color.Red,Color.Red,Color.LightYellow3,0],
	[0,0,0,Color.Yellow,Color.LightYellow3,Color.Yellow,0,0],
	[0,0,0,0,0,0,0,0],],
Vase: [[0,0,0,Color.Green2,Color.DarkGreen,0,0,0],
	[0,0,0,Color.DarkGreen,Color.DarkGreen,0,Color.Green2,0],
	[0,Color.DarkGreen,0,Color.DarkGreen,Color.DarkGreen,Color.DarkGreen,Color.DarkGreen,0],
	[0,Color.Green2,Color.DarkGreen,Color.DarkGreen,Color.Green2,0,0,0],
	[0,0,0,Color.DarkGreen,Color.DarkGreen,0,0,0],
	[0,Color.White2,Color.White2,Color.White2,Color.White2,Color.White2,Color.White2,0],
	[0,Color.White2,Color.White2,Color.White2,Color.White2,Color.White2,Color.White2,0],
	[0,0,Color.White2,Color.White2,Color.White2,Color.White2,0,0],],
Table1: [[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Brown,0,0,0,0,0,0,Color.Brown],
	[0,0,0,0,0,0,0,0],],
Table2: [[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Yellow,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.DarkGreenBlue,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightYellow3,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.GreenBlue3,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Brown,0,0,0,0,0,0,Color.Brown],
	[0,0,0,0,0,0,0,0],],
Table3: [[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.White,Color.White,Color.White,Color.LightBrown,Color.Black,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.White,Color.White,Color.White,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown],
	[Color.Brown,0,0,0,0,0,0,Color.Brown],
	[0,0,0,0,0,0,0,0],],
Chest: [[0,0,0,0,0,0,0,0],
	[0,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0],
	[Color.Brown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown],
	[Color.Brown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown],
	[Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Black,Color.Brown,Color.Brown,Color.Brown],
	[Color.Brown,Color.LightBrown,Color.LightBrown,Color.Black,Color.Black,Color.Black,Color.LightBrown,Color.Brown],
	[Color.Brown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.Brown],
	[Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown],],
FlowerPot: [[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,Color.DarkPink,0,0,0],
	[0,0,0,Color.DarkPink,Color.DarkPink2,Color.DarkPink,0,0],
	[0,0,0,0,Color.DarkPink,0,0,0],
	[0,0,0,0,Color.LightGreen6,0,0,0],
	[0,0,0,Color.White2,Color.White2,Color.White2,0,0],
	[0,0,0,Color.White2,Color.White2,Color.White2,0,0],],
}

class DrawingBoard {
  constructor(configs) {
    this.layersEl = document.getElementById('layers');
    this.layersEl.style.width = `${configs.width}px`;
    this.layersEl.style.height = `${configs.height}px`;
    this.outputBg = document.getElementById('matrix-bg');
    this.outputSo = document.getElementById('matrix-so');
    this.width = configs.width;
    this.height = configs.height;
    this.boardRows = configs.boardRows;
    this.boardColumns = configs.boardColumns;
    this.cellWidth = this.width/this.boardRows;
    this.cellHeight = this.height/this.boardColumns;
    this.color = Color.Black;
    this.drawing = false;
    this.erasing = false;
    this.tileId = 0;
    this.bucket = false;
    document.body.addEventListener('touchmove', (e) => { 
      e.preventDefault();
    }, { passive: false });
    
    this.drawButtons();
    this.drawingMatrixBackground = [];
    this.drawingMatrixSolid = [];
    this.initDrawingMatrixes();
    this.drawOutputMatrixBackground();
    this.drawOutputMatrixSolid();
    
    this.backgroundLayer = new CanvasLayer(this, 'background');
    this.solidLayer = new CanvasLayer(this, 'solid');
    
    this.btnBucket = document.getElementById('bucket');
    this.btnBucket.onclick = this.selectBucket.bind(this);
    this.btnClear = document.getElementById('clear');
    this.btnClear.onclick = this.clearLayer.bind(this);
    
    this.btnBackground = document.getElementById('selectBackground');
    this.btnSolid = document.getElementById('selectSolid');
    this.btnBackground.onclick = this.selectBackground.bind(this);
    this.btnSolid.onclick = this.selectSolid.bind(this);
    
    this.currentTile = Tiles[Object.keys(Tiles)[0]];
    this.currentLayer = this.backgroundLayer;
    this.btnBackground.disabled = true;
  }
  
  clearLayer() {
    const isBackground = this.currentLayer.canvasElName == 'background';
    if (isBackground) {
      this.clearDrawingMatrix(this.drawingMatrixBackground);
      this.drawOutputMatrixBackground();
    } else {
      this.clearDrawingMatrix(this.drawingMatrixSolid);
      this.drawOutputMatrixSolid();
    }
    this.currentLayer.clear();
  }
  diselectBucket() {
    this.btnBucket.disabled = false;
    this.bucket = false;
  }
  selectBucket() {
    this.btnBucket.disabled = true;
    this.bucket = true;
  }
  selectBackground() {    
    this.btnSolid.disabled = false;
    this.btnBackground.disabled = true;
    this.currentLayer = this.backgroundLayer;
  }
  selectSolid() {    
    this.btnSolid.disabled = true;
    this.btnBackground.disabled = false;
    this.currentLayer = this.solidLayer;
  }
  
  initDrawingMatrixes() {
    for(let i=0; i < this.boardRows; i++) {
      this.drawingMatrixBackground.push([]);
      this.drawingMatrixSolid.push([]);
      for(let j=0; j < this.boardColumns; j++) {
        this.drawingMatrixBackground[i][j] = 0;
        this.drawingMatrixSolid[i][j] = 0;
      }
    }
  }
  
  clearDrawingMatrix(drawingMatrix) {
    drawingMatrix.splice(0,drawingMatrix.length)
    for(let i=0; i < this.boardRows; i++) {
      drawingMatrix.push([]);
      for(let j=0; j < this.boardColumns; j++) {
        drawingMatrix[i][j] = 0;
      }
    }
  }
  
  drawButtons() {
    let first = true
    const buttonsParent = document.getElementById('buttons')
    for (const [key, value] of Object.entries(Tiles)) {
      let newButton = document.createElement('canvas')
      newButton.classList.add('canvas-btn');
      newButton.id = key
      if (first) {
        newButton.style.outline = 'thick solid black'
        first = false
      }
      newButton.onclick = () => this.changeTile(value,key)
      buttonsParent.appendChild(newButton)
      new ButtonTile(key, value)
    }
  }
  
  changeTile(tile,elKey) {
    const children = document.getElementById('buttons').children;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      child.style.outline = '1px solid gray';
    }
    document.getElementById(elKey).style.outline = 'thick solid black';
    this.currentTile = tile;
  }
  
  mouseMove(e) {
    e = e || window.event;
    
    let pos = this.getOffset(e);
    
    if (this.drawing || this.erasing) {
      this.draw(pos.x, pos.y);
    }
  }
  
  mouseClick(e) {
    e = e || window.event;
  
    let pos = this.getOffset(e);
  
    if (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'touchmove') {
      if (e.type === 'mousedown') {
        if (e.button == 0) {
          this.drawing = true;
          this.erasing = false;
        } else if (e.button == 2) {
          this.erasing = true;
          this.drawing = false;
        }
      } else {
        this.drawing = true;
        this.erasing = false;
      }
            
        this.draw(pos.x, pos.y);
      } else {
        this.drawing = false;
        this.erasing = false;
      }
  }
  
  getOffset(e) {
    let clientX = 0;
    let clientY = 0;
    if (e.touches) {
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
      
    let target = e.target || e.srcElement,
      rect = target.getBoundingClientRect(),
      offsetX = (clientX - rect.left),
      offsetY = (clientY - rect.top);
  
    return { x: (offsetX | 0), y: (offsetY | 0) };
  }
  
  draw(x,y) {
    x = Math.floor(x/this.cellWidth);
    y = Math.floor(y/this.cellHeight);
    
    if (this.erasing) {      
      this.currentLayer.removeTile(x,y)
    } else {
      if (!this.bucket) {
        this.tileId++;
        this.currentLayer.addTile(new Tile(this, this.tileId, this.currentLayer, x, y, this.currentTile, this.getTileKeyByValue(this.currentTile)))
        this.backgroundLayer.draw();
        this.solidLayer.draw();
      } else {
        this.currentLayer.bucketDrop(this, this.currentTile,this.getTileKeyByValue(this.currentTile));
        this.bucketDrop(this.getTileKeyByValue(this.currentTile));
        this.diselectBucket();
      }
    }
    
    if (!this.erasing) {
      if (this.currentLayer.canvasElName == 'background') {
        this.drawingMatrixBackground[y][x] = `Tiles.${this.getTileKeyByValue(this.currentTile)}`;
      } else {
        this.drawingMatrixSolid[y][x] = `Tiles.${this.getTileKeyByValue(this.currentTile)}`;
      }
    } else {
      if (this.currentLayer.canvasElName == 'background') {
        this.drawingMatrixBackground[y][x] = 0;
      } else {
        this.drawingMatrixSolid[y][x] = 0;
      }
    }
    
    if (this.currentLayer.canvasElName == 'background') {
      this.drawOutputMatrixBackground();
    } else {
      this.drawOutputMatrixSolid();
    }
  }
  
  bucketDrop(tileKey) {
    const isBackground = this.currentLayer.canvasElName == 'background';
    if (isBackground) {
      this.drawingMatrixBackground.splice(0, this.drawingMatrixBackground.length)
    } else {
      this.drawingMatrixSolid.splice(0, this.drawingMatrixSolid.length)
    }
    
    for(let i=0; i < this.boardRows; i++) {
      if (isBackground) {
        this.drawingMatrixBackground.push([]);
      } else {
        this.drawingMatrixSolid.push([]);
      }
      for(let j=0; j < this.boardColumns; j++) {
        if (isBackground) {
          this.drawingMatrixBackground[i][j] = `Tiles.${tileKey}`;
        } else {
          this.drawingMatrixSolid[i][j] = `Tiles.${tileKey}`;
        }
      }
    }
  }
  
  drawOutputMatrixBackground() {
    this.outputBg.value = `${this.getStringOutputFromMatrix(this.drawingMatrixBackground)}`;
  }
  drawOutputMatrixSolid() {
    this.outputSo.value = `${this.getStringOutputFromMatrix(this.drawingMatrixSolid)}`;
  }
  
  getStringOutputFromMatrix(drawingMatrix) {
    let output = '[';
    for (let i=0; i<drawingMatrix.length;i++ ){
      output += '[';
      for (let j=0; j<drawingMatrix[0].length; j++) {
        if (drawingMatrix[i][j] == 0) {
          output += `0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`;
        } else {
          output += `${drawingMatrix[i][j]}`;
          if (drawingMatrix[i][j].length < 15) {
            let spaces = ''
            for (let k=0; k<(15-drawingMatrix[i][j].length);k++){
              output += `\xa0`;
            }
          }
        }
        
        if (j != drawingMatrix[0].length - 1) {
          output += ','
        }
      }
      output += '],';
      if (i != drawingMatrix.length - 1) {
        output += '\n\xa0';
      }
    }
    output += '];';

    return output;
  }
  getTileKeyByValue(value) {
    return Object.keys(Tiles).find(key => Tiles[key] === value);
  }
}

class CanvasLayer {
  constructor(drawingBoard, canvasEl) {
    this.canvasElName = canvasEl
    this.drawingBoard = drawingBoard
    this.c = document.getElementById(canvasEl)
    this.c.style.marginLeft = `-${drawingBoard.width/2}px`
    this.ctx = this.c.getContext('2d')
    this.width = drawingBoard.width
    this.height = drawingBoard.height
    this.boardRows = drawingBoard.boardRows
    this.boardColumns = drawingBoard.boardColumns
    this.ctx.canvas.width  = drawingBoard.width
    this.ctx.canvas.height = drawingBoard.height
    this.cellWidth = drawingBoard.width/drawingBoard.boardRows
    this.cellHeight = drawingBoard.height/drawingBoard.boardColumns
    
    this.c.onmousemove = drawingBoard.mouseMove.bind(drawingBoard)
    this.c.onmousedown = drawingBoard.mouseClick.bind(drawingBoard)
    this.c.onmouseup = drawingBoard.mouseClick.bind(drawingBoard)
    this.c.ontouchmove = drawingBoard.mouseMove.bind(drawingBoard)
    this.c.ontouchstart = drawingBoard.mouseClick.bind(drawingBoard)
    this.c.ontouchend = drawingBoard.mouseClick.bind(drawingBoard)
    this.c.oncontextmenu = (e) => {return false}
    
    this.tiles = []
  }
  
  clear() {
    this.tiles.splice(0,this.tiles.length)
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
  
  bucketDrop(board, tile, tileKey) {
    this.clear()
    for (let y=0;y<board.boardColumns;y++) {
      for (let x=0;x<board.boardRows;x++) {
        this.addTile(new Tile(board, board.tileId, this, x, y, tile, tileKey))
      }
    }
    this.draw()
  }
  
  addTile(tileAdded) {
    const alreadySameTile = this.tiles.some(tile => (tile.name == tileAdded.name) && ((tile.x == tileAdded.x) && (tile.y == tileAdded.y)))
    if (!alreadySameTile) {
      this.removeTile(tileAdded.x, tileAdded.y)
      this.tiles.push(tileAdded)
    }
  }
  
  removeTile(x,y) {
    const tile = this.tiles.find((tile) => { return tile.x == x && tile.y == y })
    const index = this.tiles.indexOf(tile)
    if (index > -1) {
      tile.destroy()
      this.tiles.splice(index, 1)
    }
  }
  
  draw() {
    for (const tile of this.tiles) {
      tile.draw()
    }
  }
}

class ButtonTile {
  constructor(canvasEl, tile) {
    this.c = document.getElementById(canvasEl)
    this.ctx = this.c.getContext('2d')
    this.width = 32
    this.height = 32
    this.boardRows = 1
    this.boardColumns = 1
    this.ctx.canvas.width  = this.width
    this.ctx.canvas.height = this.height
    this.cellWidth = this.width/this.boardRows
    this.cellHeight = this.height/this.boardColumns
    this.c.oncontextmenu = (e) => {return false}    
    this.tile = new Tile(this,1,this,0,0,tile,'')
    this.tile.draw()
  }
}

class Tile {
    constructor(drawingBoard, id, layer, x, y, tile, name) {
      this.drawingBoard = drawingBoard;
      this.layer = layer;
      this.id = id;
      this.name = name;
      this.x = x;
      this.y = y;
      this.tileSize = 8;
      this.tileMatrix = tile;
    }
  
    draw() {
      this.layer.ctx.beginPath();
  
      for (let column = 0; column < this.tileSize; column++) {
        for (let line = 0; line < this.tileSize; line++) {
          const tileColor = this.tileMatrix[line][column];
          if (tileColor !== 0) {
              this.layer.ctx.fillStyle = tileColor
              const startX = ((column * this.drawingBoard.cellWidth / this.tileSize) + (this.x * this.drawingBoard.cellWidth)) | 0;
              const startY = ((line * this.drawingBoard.cellHeight / this.tileSize) + (this.y * this.drawingBoard.cellHeight)) | 0;
              const width = (this.drawingBoard.cellWidth / this.tileSize);
              const height = (this.drawingBoard.cellHeight / this.tileSize);
              this.layer.ctx.fillRect(startX, startY, width, height);
          } 
        }
      }
  
      this.layer.ctx.fill();
    }
  
    clear() {
      this.layer.ctx.clearRect(this.x * this.drawingBoard.cellWidth, this.y * this.drawingBoard.cellHeight, this.drawingBoard.cellWidth, this.drawingBoard.cellHeight);
    }
  
    destroy() {
      this.clear();
      this.drawingBoard = null;
      this.layer = null;
      this.id = null;
      this.x = null;
      this.y = null;
      this.color = null;
      this.draw = null;
      this.clear = null;
    }
  }

const configs = {
  width: 256,
  height: 256,
  boardRows: 16,
  boardColumns: 16
};

const paint = new DrawingBoard(configs);