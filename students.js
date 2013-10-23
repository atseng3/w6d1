function Student(fname, lname) {
	this.fname = fname;
	this.lname = lname;
	this.courses = [];
}

Student.prototype.name = function() {
	return this.fname + " " + this.lname;
}

Student.prototype.enroll = function(course) {
	course.addStudent(this);
}

Student.prototype.courseLoad = function() {
	var load = {};
	for (var i = 0; i < this.courses.length; i++) {
		var course = this.courses[i];
		if (!load.hasOwnProperty(course.department)) {
			load[course.department] = 0;
		}
		load[course.department] += course.credits;
	}
	return load;
}

function Course(name, department, credits, block, days) {
	this.name = name;
	this.department = department;
	this.credits = credits;
	this.students = [];
	this.block = block;
	this.days = days;
}

Course.prototype.addStudent = function(student) {
	if (this.students.indexOf(student) == -1) {
		for (var i = 0; i < student.courses.length; i++) {
			if (student.courses[i].conflictsWith(this)) {
				return;
			}
		}
		this.students.push(student);
		student.courses.push(this);
	}
}

Course.prototype.conflictsWith = function(course) {
	if (this.block == course.block) {
		for (var i = 0; i < this.days.length; i++) {
	    if (course.days.indexOf(this.days[i]) !== -1) {
	        return true;
	    }
		}
	}
	return false;
}

var s1 = new Student("zuhaerr", "mansiv");
var s2 = new Student("albert", "tseng");
console.log(s1.name());
console.log(s2.name());
var c1 = new Course("algebra", "math", 2, 1, ["m", "w", "f"]);
var c2 = new Course("calculus", "math", 4, 1, ["t", "th"]);
var c3 = new Course("chemistry", "science", 3, 2, ["m", "w", "f"]);
var c4 = new Course("physics", "science", 3, 1, ["m", "w", "f"]);
s1.enroll(c1);
s1.enroll(c2);
s1.enroll(c3);
console.log(s1.courses);
console.log(s1.courseLoad());
console.log(c1.students);

console.log(c1.conflictsWith(c2));
console.log(c1.conflictsWith(c3));
console.log(c1.conflictsWith(c4));