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
    this.cellWidth = this.roomWidth/this.roomRows
    this.cellHeight = this.roomHeight/this.roomColumns
    
    this.backgroundLayer = new CanvasLayer(this, 'background')
    this.solidLayer = new CanvasLayer(this, 'solid')

    this.drawMap()
  }

  drawMap() {
    const mapKeysArray = Object.entries(SolidLayers).map(o => o[0])
    let k = 0
    for (let i=0; i<this.mapRoomsVertical; i++) {
      for (let j=0; j<this.mapRoomsHorizontal; j++) {
        const y = i * this.roomColumns
        const x = j * this.roomRows
        this.drawRoom(x,y,mapKeysArray[k])
        k+=1
      }
    }
  }

  drawRoom(roomX,roomY,room) {
    this.drawRoomBackgroundLayer(roomX,roomY,BackgroundLayers[room])
    this.drawRoomSolidLayer(roomX,roomY,SolidLayers[room])
  }

  drawRoomBackgroundLayer(roomX,roomY,room) {
    for (let i=0; i<this.roomColumns; i++) {
      for (let j=0; j<this.roomRows;j++) {
        const x = roomX + j
        const y = roomY + i
        const tileMatrix = room[i][j]
        const tile = new Tile(this, this.backgroundLayer, x, y, tileMatrix)
        this.backgroundLayer.addTile(tile)
      }
    }
  }

  drawRoomSolidLayer(roomX,roomY,room) {
    for (let i=0; i<this.roomColumns; i++) {
      for (let j=0; j<this.roomRows;j++) {
        const x = roomX + j
        const y = roomY + i
        const tileMatrix = room[i][j]
        if (tileMatrix !== 0 && tileMatrix !== -1) {
          const tile = new Tile(this, this.solidLayer, x, y, tileMatrix)
          this.solidLayer.addTile(tile)
        }
      }
    }
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
    
    this.tiles = []
  }
  
  clear() {
    this.tiles.splice(0,this.tiles.length)
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
  
  addTile(tileAdded) {
    this.tiles.push(tileAdded)
  }
  
  removeTile(x,y) {
    const tile = this.tiles.find((tile) => { return tile.x == x && tile.y == y })
    const index = this.tiles.indexOf(tile)
    if (index > -1) {
      tile.destroy()
      this.tiles.splice(index, 1)
    }
  }
}

class Tile {
    constructor(drawingBoard, layer, x, y, tile) {
      this.drawingBoard = drawingBoard
      this.layer = layer
      this.x = x
      this.y = y
      this.tileSize = 8
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
              const startX = ((column * this.drawingBoard.cellWidth / this.tileSize) + (this.x * this.drawingBoard.cellWidth))
              const startY = ((line * this.drawingBoard.cellHeight / this.tileSize) + (this.y * this.drawingBoard.cellHeight))
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
  width: 2048,
  height: 2048,
  roomRows: 16,
  roomColumns: 16,
  mapRoomsHorizontal: 10,
  mapRoomsVertical: 10
};

window.onload = () => {
  const paint = new DrawingBoard(configs);
}