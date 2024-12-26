// based on NES (https://lospec.com/palette-list/nintendo-entertainment-system)

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

class DrawingBoard {
  constructor(configs) {
    this.output = document.getElementById('matrix');
    this.c = document.getElementById('canvas');
    this.c.onmousemove = this.mouseMove.bind(this);
    this.c.onmousedown = this.mouseClick.bind(this);
    this.c.onmouseup = this.mouseClick.bind(this);
    this.c.ontouchmove = this.mouseMove.bind(this);
    this.c.ontouchstart = this.mouseClick.bind(this);
    this.c.ontouchend = this.mouseClick.bind(this);
    this.c.oncontextmenu = (e) => {return false;};
    this.ctx = this.c.getContext('2d');
    this.width = configs.width;
    this.height = configs.height;
    this.boardRows = configs.boardRows;
    this.boardColumns = configs.boardColumns;
    this.ctx.canvas.width  = this.width;
    this.ctx.canvas.height = this.height;
    this.cellWidth = this.width/this.boardRows;
    this.cellHeight = this.height/this.boardColumns;
    this.color = Color.Black;
    this.drawing = false;
    this.erasing = false;
    this.loadBtn = document.getElementById('loadFromMatrix')
    this.loadBtn.onclick = () => {
      this.loadFromOutputMatrix()
    }
    document.body.addEventListener('touchmove', (e) => { 
      e.preventDefault();
    }, { passive: false });
    
    this.drawButtons();
    this.drawingMatrix = [];
    this.initDrawingMatrix();
    this.drawOutputMatrix();
    //this.grid = new Grid(this);
  }
  
  initDrawingMatrix() {
    for(let i=0; i < this.boardRows; i++) {
      this.drawingMatrix.push([]);
      for(let j=0; j < this.boardColumns; j++) {
        this.drawingMatrix[i][j] = 0;
      }
    }
  }
  
  drawButtons() {
    const buttonsParent = document.getElementById('buttons')
    for (const [key, value] of Object.entries(Color)) {
      let newButton = document.createElement('input')
      newButton.type = 'button'
      newButton.id = key
      newButton.style.backgroundColor = value
      newButton.onclick = () => this.changeColor(value)
      buttonsParent.appendChild(newButton)
    }
  }
  
  changeColor(color) {
    this.color = color;
  }
  
  mouseMove(e) {
    e = e || window.event;
    
    let pos = this.getOffset(e);
    
    if (this.drawing || this.erasing) {
      this.draw(Math.floor(pos.x/this.cellWidth), Math.floor(pos.y/this.cellHeight));
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
            
        this.draw(Math.floor(pos.x/this.cellWidth), Math.floor(pos.y/this.cellHeight));
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
    let color = this.color
    let matrixValue = 1;
    
    if (this.erasing) {
      color = 'white';
      matrixValue = 0;
    }
    
    this.ctx.beginPath();
    this.ctx.rect(x * this.cellWidth, y * this.cellHeight, this.cellWidth, this.cellHeight);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    
    if (color != 'white') {
      this.drawingMatrix[y][x] = `Color.${this.getColorKeyByValue(color)}`;
    } else {
      this.drawingMatrix[y][x] = 0;
    }
    
    this.drawOutputMatrix();
  }
  
  drawOutputMatrix() {
    this.output.value = `"Tile": ${this.getStringOutputFromMatrix()}`;
  }
  
  getStringOutputFromMatrix() {
    let output = '[';
    for (let i=0; i<this.drawingMatrix.length;i++ ){
      output += '[';
      for (let j=0; j<this.drawingMatrix[0].length; j++) {
        if (this.drawingMatrix[i][j] == 0) {
          output += `0`;
        } else {
          output += `${this.drawingMatrix[i][j]}`;
        }
        
        if (j != this.drawingMatrix[0].length - 1) {
          output += ','
        }
      }
      output += '],';
      if (i != this.drawingMatrix.length - 1) {
        output += '\n\t';
      }
    }
    output += '],';

    return output;
  }
  
  loadFromOutputMatrix() {
    const indexArray = this.output.value.indexOf('[')
    const cleanedOutput = `${this.output.value.substring(indexArray).replaceAll(/\r?\n|\r|\s|\t| +/g,'').slice(0,-3)}]`
    let translatedOutput = ''
    for (let i = 0; i < cleanedOutput.length; i++) {
      const isValidValue = (cleanedOutput[i] != '[') && (cleanedOutput[i] != ']') && (cleanedOutput[i] != ',')
      
      if ((cleanedOutput[i-1] == ',' || cleanedOutput[i-1] == '[') && isValidValue) {
        translatedOutput += '"'
      }
      translatedOutput += cleanedOutput[i]
      if ((cleanedOutput[i+1] == ',' || cleanedOutput[i+1] == ']') && isValidValue) {
        translatedOutput += '"'
      }
    }
    const matrix = JSON.parse(translatedOutput)
    
    for(let i=0; i < this.boardRows; i++) {
      for(let j=0; j < this.boardColumns; j++) {
        if (matrix[i][j] == "0") {
          this.erasing = true
          this.draw(j,i)
        } else {
          this.color = Color[matrix[i][j].split('.')[1]]
          this.erasing = false
          this.draw(j,i)
        }
      }
    }
  }
  
  getColorKeyByValue(value) {
    return Object.keys(Color).find(key => Color[key] === value);
  }
  
  getColorByKey(key) {
    return Color[key]
  }
}

class Grid {
  constructor(drawingBoard) {
    this.drawingBoard = drawingBoard;
    
    this.draw();
  }
  
  draw() {
    let i = 0;
    let j = 0;
    for(i = 0; i < this.drawingBoard.boardRows; i++) {
      for(j = 0; j < this.drawingBoard.boardColumns; j++) {
        this.drawingBoard.ctx.beginPath();
        this.drawingBoard.ctx.rect(i * this.drawingBoard.cellWidth, j * this.drawingBoard.cellHeight, this.drawingBoard.cellWidth, this.drawingBoard.cellHeight);
        this.drawingBoard.ctx.stroke();
      }
    }
  }
}

const configs = {
  width: 256,
  height: 256,
  boardRows: 8,
  boardColumns: 8
}


const paint = new DrawingBoard(configs);