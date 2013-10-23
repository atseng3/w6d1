function Cat(name, owner) {
	this.name = name;
	this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
	return this.owner + " loves " + this.name;
}

var c1 = new Cat("whiskers", "timmy");
var c2 = new Cat("eiufehifue", "jimmy");

console.log(c1.cuteStatement());
console.log(c2.cuteStatement());

Cat.prototype.cuteStatement = function() {
	return "everyone loves " + this.name;
}

console.log(c1.cuteStatement());
console.log(c2.cuteStatement());

Cat.prototype.meow = function() {
	console.log(this.name + " meows")
}

c1.meow = function() {
	console.log(this.name + " angrily meows")
}

c1.meow();
c2.meow();