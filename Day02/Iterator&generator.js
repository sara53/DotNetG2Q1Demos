// let arr = ["mona", "ali", "ahmed"];
// console.log(arr);
// console.log("-----------------");
// let person = {
// 	fname: "alaa",
// 	lname: "ali",
// };
// console.log(person);
// for (let i of arr) {
// 	console.log(i);
// }
// console.log("=================");
// for (let i in arr) {
// 	console.log(arr[i]);
// }

// let person = {
// 	fname: "ali",
// 	lname: "kareem",
// };

// console.log("=================");
// for (let i in person) {
// 	console.log(i);
// }

// for (let i of person) {
// 	console.log(i);
// }
/** ------------------ */

// let x = Symbol("age");

// let y = Symbol("age");
// console.log(x == y);

/**------- */
// var x = Symbol("age");
// var Symbol.iterator = Symbol("display");

// let person = {
// 	fname: "ali",
// 	[x]: 20,
// 	[Symbol.iterator]: function () {
// 		console.log("Hello From display");
// 	},
// };

// console.log(person[y]());

// var arr = ["mona", "ali", "ahmed"];

// arr[Symbol.iterator] = myFunc;

// function myFunc() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step <= 10) {
// 				return {
// 					value: step,
// 					done: false,
// 				};
// 			} else {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			}
// 		},
// 	};
// }

// for (let i of arr) {
// 	console.log(i);
// }
// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/**
 * Symbol.iterator --> function
 * --- function () ==> return object
 *object --> next
 next() --> {value,done}
 *
 */

// let person = {
// 	fname: "ali",
// 	display: function () {
// 		console.log("From fun1");
// 	},
// };

// person["display"] = function () {
// 	console.log("func 2");
// };

// person.display();
/**-------------------------- */

// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// };

// person[Symbol.iterator] = myFunc;

// function* myFunc() {
// 	for (let key in this) {
// 		yield this[key];
// 	}
// }
// for (let i of person) {
// 	console.log(i);
// }
// let iter = myFunc();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (let i of person) {
// 	console.log(i);
// }
// function myFunc() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step <= 10) {
// 				return {
// 					value: step,
// 					done: false,
// 				};
// 			} else {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			}
// 		},
// 	};
// }
/**-------------------- */
