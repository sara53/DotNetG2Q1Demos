/**
 * Object Features in Es6
 * == Object.Keys
 * == Object.Values
 * == Object.entries
 * == Object.assign
 * -------------------------------
 * -- OOP in Es6
 * -- Modulrity
 * -- Proxy
 * --------------------------------
 */

// var fname = "ali";
// var lname = "alaa";
// var myKey = "color";
// let person = {
// 	fname,
// 	lname,
// 	[myKey]: "red",
// 	display() {
// 		console.log(`${this.fname} ${this.lname}`);
// 	},
// };

// console.log(person);
/**------------- */

// var result = Object.keys(product);
// var result = Object.values(product);
// var result = Object.entries(product);
/**------------ */
// console.log(result);
// let product1 = {
// 	id: 1,
// 	productName: "Book",
// 	price: 300,
// 	quantity: 40,
// };

// let product2 = {
// 	color: "red",
// 	productName: "Phone",
// };

// var result = Object.assign({}, product1, product2);

// console.log("product1", product1);
// console.log("result", result);
// console.log("product2", product2);
/**--------------------------------- */

// function showDetails(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		address: "default address",
// 		age: 0,
// 	};

// 	Object.assign(defaultValues, options);
// 	console.log(
// 		`fname=${defaultValues.fname},
//          age=${defaultValues.age} ,
//          address=${defaultValues.address}`
// 	);
// }

// showDetails({
// 	fname: "ahmed",
// 	address: "cairo",
// 	age: 30,
// });

/**-------------- OOP ----------- */

// var h1 = document.createElement("h1");
// var h2 = document.createElement("h2");
// // let product1 = { id: 1, productName: "Book" };
// // let product2 = { id: 3, price: 300 };
// // let product3 = { productName: "Phone", quantity: 50 };

// h1.innerHTML = product1.productName;
// h2.innerHTML = product2.productName;

// document.body.appendChild(h1);
// document.body.appendChild(h2);

// class Product {
// 	#id;
// 	constructor(id, productName = "", price = "") {
// 		this.#id = id;
// 		this.productName = productName;
// 		this.price = price;
// 	}

// 	discount() {
// 		console.log(`${this.price * 0.2}`);
// 	}

// 	get getId() {
// 		return this.#id;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// var p1 = new Product(23, "Book", 300);

// p1.setId = " new Id";
// console.log(p1.getId);

// p1.setId("new id"); // setter
// console.log(p1.getId()); // getter
// console.log(p1.#id);
// var p2 = new Product("Pen", 20);
// var p3 = new Product();

// delete p1.productName;
// console.log(p1);
// p1.productName = "laptop"; // set
// console.log( p1.productName ); // get
/**---------------------------------------- */

// class Person {
// 	constructor(fname, lname, age) {
// 		// console.log(this.constructor);
// 		// if (this.constructor == Person) {
// 		// 	throw "No Object";
// 		// }
// 		this.fname = fname;
// 		this.age = age;
// 		this.lname = lname;
// 	}

// 	display() {
// 		console.log(`${this.fname} , ${this.lname}`);
// 	}

// 	// static show() {
// 	// 	console.log("Welcome From Static Method");
// 	// }
// }

// var p1 = new Person("ali", "ahmed", 20);
// console.log(p1);
// Person.show();
// user -- subclass - child
// person -- super class -- Parent
//(Inheritance)
// class User extends Person {
// 	constructor(fname = "", lname = "", age = "", password = "") {
// 		super(fname, lname, age);
// 		this.password = password;
// 	}
// 	display() {
// 		super.display();
// 		//console.log("Test");
// 	}

// 	showPass() {
// 		console.log(this.password);
// 	}
// }

// let myUser = new User("Ali", "ahmed", 30, "aliAHMED");
// console.log(myUser);
// myUser.display();
// myUser.showPass();
/**--------------- */
/**
 * export naming
 * export default
 *
 */
// import * as all from "./main.js";

// console.log(all.add(3, 4));
// all.square();
// all.default();

// console.log(all.fname);

// import show, { square } from "./main.js";

let person = {
	fname: "Ali",
	age: 30,
	lname: "kareem",
};

let handler = {
	get: function (target, prop) {
		if (!(prop in target)) throw `${prop} Not founded in person`;
		return target[prop];
	},
	set: function (target, prop, value) {
		if (prop == "age" && value < 0) {
			throw "can not set negative value";
		}
		target[prop] = value;
		return true;
	},
};
let myProxy = new Proxy(person, handler);

myProxy.fname = "mona";
myProxy.age = -10;
console.log(myProxy.fname);
console.log(myProxy.age);
// console.log(myProxy.fname); // get
// console.log(myProxy.age); // get
// console.log(myProxy.lname); // get
// console.log(myProxy.color);
// console.log(myProxy.display);
// person.age = -30;
// console.log(person.age); // 30
// console.log(person.color); // undef
