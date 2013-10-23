function range(start, end) {
	if (start == end) {
		return [start];
	}
	return [start].concat(range(start + 1, end));
}

function sum(arr) {
	if (arr.length == 1) {
		return arr[0];
	}
	return arr[0] + sum(arr.slice(1, arr.length));
}

function exp1(base, exponent) {
	if (exponent == 0) {
		return 1;
	}
	return base * exp1(base, exponent - 1);
}

function exp2(base, exponent) {
	if (exponent == 0) {
		return 1;
	}
	if (exponent % 2 == 0) {
		var x = exp2(base, exponent / 2);
		return x * x;
	} else {
		var x = exp2(base, (exponent - 1) / 2);
		return base * x * x;
	}
}

function fib(n) {
	switch(n) {
	case 1:
		return [0];
	case 2:
		return [0, 1];
	default:
		fibs = fib(n - 1);
		fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
		return fibs;
	}
}

function bsearch(arr, val) {
	arr = bubbleSort(arr);
	var mid = Math.floor(arr.length / 2);
	if (arr[mid] > val) {
		return bsearch(arr.slice(0, mid), val);
	} else if (arr[mid] < val) {
		return mid + bsearch(arr.slice(mid, arr.length + 1), val);
	} else {
		return mid;
	}
}

function bubbleSort(arr) {
	var unordered = true;
	while (unordered) {
		unordered = false;
		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				unordered = true;
			}
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var left = [];
	var right = [];
	var mid = Math.floor(arr.length / 2);
	for (var i = 0; i < arr.length; i++) {
		if (i < mid){
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right);
}

function merge(left, right) {
	var result = [];
	while (left.length > 0 || right.length > 0) {
		if (left.length > 0 && right.length > 0) {
			if (left[0] <= right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		} else if (left.length > 0) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return result;
}

function subsets(arr) {
	if (arr.length == 0) {
		return [[]];
	}

	var first = arr.shift();
	var subs = subsets(arr);

	var len = subs.length
	for (var i = 0; i < len; i++) {
		subs.push([first].concat(subs[i]));
	}

	return subs;
}

function makeChange(amount, coins) {
	var helper = function(amount, coins) {
		for (var i = 0; i < coins.length; i++) {
			var coin = coins[i];
			if (amount > coin) {
				return [coin].concat(helper(amount - coin, coins));
			}
			if (amount == coin) {
				return [coin];
			}
		}
	}
	var change1 = helper(amount, coins);
	var change2 = helper(amount, coins.slice(1, coins.length));
	return change2.length < change1.length ? change2 : change1;
}

//console.log(range(5, 20));

//console.log(sum([1, 2, 3, 4, 5, 6]));

//console.log(exp1(2, 10));

//console.log(exp2(2, 10));

//console.log(fib(100))

//console.log(bsearch([1,2,3,4,5], 4));

//console.log(mergeSort([30, 5, 4, 3, 2, 1, 12, 20]));

//console.log(subsets(["a", "b", "c"]));

var US_COINS = [25, 10, 5, 1];
var OTHER_COINS = [10, 7, 1];

console.log(makeChange(39, US_COINS));
console.log(makeChange(14, OTHER_COINS));