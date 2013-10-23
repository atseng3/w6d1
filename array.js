Array.prototype.uniq = function uniq() {
	var uniq = [];
	for (var i = 0; i < this.length; i++) {
		var val = this[i];
		if (uniq.indexOf(val) == -1) {
			uniq.push(val);
		}
	}
	return uniq;
};

Array.prototype.two_sum = function two_sum() {
	var pairs = [];
	for (var i = 0; i < this.length - 1; i++) {
		for (var j = i + 1; j < this.length; j++) {
			if (this[i] + this[j] == 0) {
				pairs.push([i, j]);
			}
		}
	}
	return pairs;
}

Array.prototype.transpose = function transpose() {
	var transposed = new Array(this.length);
	for (var i = 0; i < this.length; i++) {
		transposed[i] = new Array(this.length);
	}
	for (var i = 0; i < this.length; i++) {
		for (var j = 0; j < this.length; j++) {
			transposed[i][j] = this[j][i];
		}
	}
	return transposed;
}

// var a = [1, 2, 3, 1, 2, 3, 4, 5, 5];
// a = a.uniq();
// console.log(a);

//console.log([-1, 0, 2, -2, 1].two_sum()) // => [[0, 4], [2, 3]]

var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
console.log(rows.transpose())