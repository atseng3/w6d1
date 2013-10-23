var Piece = require("./piece.js").Piece;

function Board(){
	this.SIZE = 8;
	this.grid = [];
	for (var i = 0; i < this.SIZE; i++) {
		this.grid.push(new Array(this.SIZE));
	}
	this.grid[3][3] = new Piece("white");
	this.grid[4][4] = new Piece("white");
	this.grid[3][4] = new Piece("black");
	this.grid[4][3] = new Piece("black");
};

Board.prototype.full = function() {
	for (var row = 0; row < this.SIZE; row++) {
		for (var col = 0; col < this.SIZE; col++) {
			if (!this.grid[row][col]) {
				return false;
			}
		}
	}
	return true;
};

Board.prototype.print = function() {
	for (var row = 0; row < this.SIZE; row++) {
		var rowString = "";
		for (var col = 0; col < this.SIZE; col++) {
			var piece = this.grid[row][col];
			rowString += (piece ? piece : "_") + " ";
		}
		console.log(rowString);
	}
	console.log();
}

exports.Board = Board;