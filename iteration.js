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

function substrings(string) {
	var subs = [];
	for (var i = 0; i < string.length; i++) {
		for (var j = i + 1; j <= string.length; j++) {
			subs.push(string.substring(i, j));
		}
	}
	return subs;
}

//console.log(bubbleSort([30, 5, 4, 3, 2, 1, 12, 20]));

console.log(substrings("cat"));