Array.prototype.myEach = function myEach(fun) {
	for (var i = 0; i < this.length; i++) {
		fun(this[i]);
	}
	return this;
};

Array.prototype.myMap = function myMap(fun) {
	var mapped = [];
	this.myEach(function(num) {
		mapped.push(fun(num));
	});
	return mapped;
};

Array.prototype.myInject = function myInject(fun) {
	var acc = this[0];
	this.slice(1, this.length).myEach(function(num) {
		acc = fun(acc, num);
	});
	return acc;
}

function double(arr) {
	var newArr = new Array(arr.length);
	for (var i = 0; i < arr.length; i++) {
		newArr[i] = arr[i] * 2;
	}
	return newArr;
};

function printNum(num) {
	console.log(num);
}

function doubleNum(num) {
	return num * 2;
}

//console.log(double([1, 2, 3]));

//[1, 2, 3].myEach(printNum);

//console.log([1, 2, 3].myMap(doubleNum));

console.log([1, 2, 3].myInject(function(acc, num) { return acc - num; }));