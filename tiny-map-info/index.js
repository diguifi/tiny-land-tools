class DrawingBoard {
  constructor(configs) {
    this.layersEl = document.getElementById('layers')
    this.layersEl.style.width = `${configs.width}px`
    this.layersEl.style.height = `${configs.height}px`
    this.width = configs.width
    this.height = configs.height
    this.roomRows = configs.roomRows
    this.roomColumns = configs.roomColumns
    this.mapRoomsHorizontal = configs.mapRoomsHorizontal
    this.mapRoomsVertical = configs.mapRoomsVertical
    this.roomWidth = this.width/configs.mapRoomsHorizontal
    this.roomHeight = this.height/configs.mapRoomsVertical
    this.iconProportionToRoomSize = 2
    this.cellWidth = this.roomWidth/this.iconProportionToRoomSize
    this.cellHeight = this.roomHeight/this.iconProportionToRoomSize
    
    this.backgroundLayer = new CanvasLayer(this, 'background')
    this.iconsLayer = new CanvasLayer(this, 'icons')
    this.tooltipsLayer = new CanvasLayer(this, 'tooltips')

    this.tooltipsLayer.c.onmousemove = this.mouseMove.bind(this);

    this.backgroundImage = new Image()
    this.backgroundImage.onload = () => {
      this.drawBackground()
    }
    this.backgroundImage.src = configs.srcImg
    this.drawIcons()
  }

  drawBackground() {
    this.backgroundLayer.addBackgroundImage(this.backgroundImage)
  }

  drawIcons() {
    for (let i=0; i<this.mapRoomsVertical; i++) {
      for (let j=0; j<this.mapRoomsHorizontal; j++) {
        const y = i * this.iconProportionToRoomSize
        const x = j * this.iconProportionToRoomSize

        const coords = [j,i]
        const iconInCoords = this.getIconKeyByCoordsValue(coords)
        if (iconInCoords.length > 0) {
          this.drawIcon(x,y,iconInCoords[0].Icons[0])
        }
      }
    }
  }

  drawIcon(x,y,iconMatrix) {
    const icon = new Icon(this, this.iconsLayer, x, y, iconMatrix)
    this.iconsLayer.addTile(icon)
  }

  getIconKeyByCoordsValue(value) {
    return IconsCoords.filter(obj => {
      return obj.Coords.toString() === value.toString()
    })
  }

  mouseMove(e) {
    e = e || window.event
    let pos = this.getOffset(e)
    this.checkToolTip(Math.floor(pos.x/(this.cellWidth*this.iconProportionToRoomSize)), Math.floor(pos.y/(this.cellHeight*this.iconProportionToRoomSize)))
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

  checkToolTip(x,y) {
    const coords = [x,y]
    const iconInCoords = this.getIconKeyByCoordsValue(coords)
    if (iconInCoords.length > 0) {
      const finalX = + (x*this.cellHeight*this.iconProportionToRoomSize + this.cellWidth)
      const finalY = + (y*this.cellWidth*this.iconProportionToRoomSize)
      this.drawTooltip(finalX,finalY,iconInCoords[0].Names[0])
    } else{
      this.erraseTooltips()
    }
  }

  drawTooltip(x,y,text) {
    this.tooltipsLayer.drawToolTip(x,y,text)
  }

  erraseTooltips() {
    this.tooltipsLayer.erraseTooltips()
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
    this.ctx.canvas.width  = drawingBoard.width
    this.ctx.canvas.height = drawingBoard.height
    this.ctx.font = '16px Press Start 2P'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.lastTooltipCoords = []
    
    this.tiles = []
  }
  
  clear() {
    this.tiles.splice(0,this.tiles.length)
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
  
  addTile(tileAdded) {
    this.tiles.push(tileAdded)
  }
  
  addBackgroundImage(image) {
    this.ctx.drawImage(image,0,0,image.width,image.height,0,0,this.width,this.height)
  }

  drawToolTip(x,y,text) {
    const coords = [x,y]
    if (this.lastTooltipCoords.toString() != coords.toString()) {
      this.ctx.fillText(text, x, y);
      this.lastTooltipCoords = coords
    }
  }

  erraseTooltips() {
    this.lastTooltipCoords = []
    this.clear()
  }
}

class Icon {
    constructor(drawingBoard, layer, x, y, tile) {
      this.drawingBoard = drawingBoard
      this.layer = layer
      this.x = x
      this.y = y
      this.tileSize = 16
      this.tileMatrix = tile

      this.draw()
    }
  
    draw() {
      this.layer.ctx.beginPath()
  
      for (let column = 0; column < this.tileSize; column++) {
        for (let line = 0; line < this.tileSize; line++) {
          const tileColor = this.tileMatrix[line][column];
          if (tileColor !== 0) {
              this.layer.ctx.fillStyle = tileColor
              const startX = ((column * this.drawingBoard.cellWidth / this.tileSize) + (this.x * this.drawingBoard.cellWidth)) + (this.drawingBoard.cellWidth/this.drawingBoard.iconProportionToRoomSize)
              const startY = ((line * this.drawingBoard.cellHeight / this.tileSize) + (this.y * this.drawingBoard.cellHeight)) + (this.drawingBoard.cellHeight/this.drawingBoard.iconProportionToRoomSize)
              const width = (this.drawingBoard.cellWidth / this.tileSize)
              const height = (this.drawingBoard.cellHeight / this.tileSize)
              this.layer.ctx.fillRect(startX, startY, width, height)
          } 
        }
      }
  
      this.layer.ctx.fill()
    }
  
    clear() {
      this.layer.ctx.clearRect(this.x * this.drawingBoard.cellWidth, this.y * this.drawingBoard.cellHeight, this.drawingBoard.cellWidth, this.drawingBoard.cellHeight)
    }
  
    destroy() {
      this.clear()
      this.drawingBoard = null
      this.layer = null
      this.x = null
      this.y = null
      this.draw = null
      this.clear = null
    }
  }

const configs = {
  width: 512,
  height: 512,
  roomRows: 16,
  roomColumns: 16,
  mapRoomsHorizontal: 10,
  mapRoomsVertical: 10,
  srcImg: 'tiny_land.png'
};

window.onload = () => {
  const paint = new DrawingBoard(configs);
}