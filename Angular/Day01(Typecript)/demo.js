/**
 * What is angular
 * -- framework  VS Lib
 * -- SPA VS MPA
 * -- installation typescript
 * -- datatype
 * -- custom datatype
 * -- union types in ts
 * -- array
 * -- functions
 * -- Objects
 * -- tubles
 * -- classes --
 */
/**
 * string
 * number
 * boolean
 * undefined
 * null
 * any
 */
// type stringOrNumber = string | number;
// var arr: {}[] = ["ali"];
// console.log(arr);
// type x = string | number | boolean;
// var fname: x = "alaa";
// var num: x = 30;
// fname = 20;
// fname = true;
// console.log(fname);
// tuble
// var arr: [boolean, number] = [true, 50];
// arr.push("alaa");
// console.log(arr);
// var person: { fname: string; age: number } = { fname: "400", age: 5 };
// person.fname = "dl";
// person.fname = "mona";
// person.age = "alaa";
// var products: { id: number; pName: string; price: number }[] = [];
// products.push({ id: 40, pName: "book", price: 40 });
// function add(x: number, y: number, ...w: string[]) {
// 	console.log(w);
// 	console.log(x + y);
// }
// // add();
// // add(5);
// add(7, 8);
// add(70, 60, "mona", "ali");
// function add(x?: number, y: number = 0) {
// 	if (x) {
// 		return x + y;
// 	}
// }
// add();
// function add(x: number, y: number): number {
// 	return 60;
// }
// // var result: number = add(5, 50);
// class Person2 {
// 	public id: number;
// 	public fname: string;
// 	public age: number;
// 	constructor(id: number, fname: string, age: number) {
// 		this.id = id;
// 		this.fname = fname;
// 		this.age = age;
// 	}
// }
// class Person {
// 	constructor(private id: number, public fname: string, public age: number) {}
// 	get getId() {
// 		return this.id;
// 	}
// 	set setId(value: number) {
// 		this.id = value;
// 	}
// }
// var p1 = new Person(20, "mona", 50);
// var p2 = new Person(10, "ahmed", 20);
// // p1.getId // get
// p1.setId = 60; // set
// console.log(p1.getId);
// p1.setId(60);
// console.log(p1.getId());
/**--------------- */
// interface Iperson {
// 	id: number;
// 	fname: string;
// 	age: number;
// 	display: () => void;
// }
// var arr: Iperson[] = [];
// // arr.push({ id: 30, age: 50, fname: "alaa", display() {} });
// class Person implements Iperson {
// 	constructor(public id: number, public fname: string, public age: number) {}
// 	display() {
// 		console.log("display");
// 	}
// }
// class User extends Person {
// 	constructor(id: number, fname: string, age: number, public password: string) {
// 		super(id, fname, age);
// 	}
// 	display(): void {
// 		console.log(`${this.fname} : ${this.age} ${this.password}`);
// 	}
// }
// var myUser = new User(3, "ahmed", 50, "AHMED");
// myUser.display();
// var p1 = new Person(1, "ali", 70);
// p1.display();
/**-------------
 *  1- install typescript
 *  2- arr string -- numbers (stringOrNumber as a custom type)
 *  3- Interface IEmployee
 * -- h/ 200
 * {id:2,fname:"ali",age:50,salary:30,overtime:4,netSalary=>number}
 * 4- class implement IEmployee
 * 5- class Manger extene Employee
 * ----------- */
