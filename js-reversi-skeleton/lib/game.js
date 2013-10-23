var Piece = require("./piece.js").Piece;
var Board = require("./board.js").Board;

var DIRS = [[-1, -1], [-1, 0], [-1, 1],
						[0, -1], [0, 1],
						[1, -1], [1, 0], [1, 1]];

function Game() {
	this.board = new Board();
	this.currentPlayer = "black";
};

Game.prototype.won = function() {

};

Game.prototype.placePiece = function(pos, color) {
	var grid = this.board.grid[pos[0]];
	var row = grid[pos[0]];
	if (this.board.grid[pos[0]][pos[1]]) {
		throw new Error("Invalid Move");
	}
	this.board.grid[pos[0]][pos[1]] = new Piece(color);
	if (!this.flipCaptured(pos, color)) {
		this.board.grid[pos[0]][pos[1]] = null;
		throw new Error("Invalid Move");
	}
	this.currentPlayer = this.currentPlayer == "white" ? "black" : "white";
};

Game.prototype.flipCaptured = function(newPos, color) {
	var flipped = false;
	for (var i = 0; i < DIRS.length; i++) {
		var toFlip = this.checkDirFlips(newPos, color, DIRS[i]);
		for (var j = 0; j < toFlip.length; j++) {
			var flipPos = toFlip[j];
			this.board.grid[flipPos[0]][flipPos[1]].color = color;
			flipped = true;
		}
	}
	return flipped;
}

Game.prototype.checkDirFlips = function(newPos, color, dir) {
	var curPos = newPos;
	var toFlip = [];
	while (curPos[0] > -1 && curPos[0] < this.board.SIZE
					&& curPos[1] > -1 && curPos[1] < this.board.SIZE
					&& (curPiece = this.board.grid[curPos[0]][curPos[1]])) {
		if (curPos != newPos) {
			if (curPiece.color === color) {
				return toFlip;
			} else {
				toFlip.push(curPos);
			}
		}
		curPos = [curPos[0] + dir[0], curPos[1] + dir[1]];
	}
	return [];
}

Game.prototype.runLoop = function() {

};

exports.Game = Game;