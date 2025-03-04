//complete this code
class Person {
	constructor(name, age){
		this.name = name
		this.age = age
	}
	name(){
		return this.name
	}
	setAge(age){
		this.age = age
	}
	getAge(){
		return this.age
	}
}

class Student extends Person {
	constructor(name, age){
		super(name,age)
	}
	study(){
		console.log(this.name + " is studying")
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name,age)
	}
	teach(){
		console.log(this.name + " is teaching")
	}
}

let p = new Person('John', 25)
console.log(p.name)
p.setAge(45)
console.log(p.getAge())

let s = new Student('Alice', 22)
s.study()

let t = new Teacher('Bob', 40)
t.teach()
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
