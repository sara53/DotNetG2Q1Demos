/**
  var let const 
  Spread operator 
  rest params
  default values
  destructing
  String API
  Arrow Function 
  Array API

 */

/**
 * VAR
 * -- reclaration
 * -- reassign
 * --Hoisting
 * -- added to window object
 * -- function scope
 * ----------------------
 * let
 *  == reassign
 *  == can't redeclare
 *  == can't be hoisted
 *  == not added to window object
 *  == block scope
 * ----------------------
 * const
 *  == can't reassign
 *  == can't redeclare
 *  == can't be hoisted
 *  == not added to window object
 *  == block scope
 */

// let fname = "mona";

// console.log(fname);
// console.log(window.fname);

// function show() {
// 	let test = "hello";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(test);
// 	}
// }

// show();

// const test = "ali";
// test = "alaa";

// console.log(test);

// const arr = [10, 20];

// arr.push("new value");

// arr = []; // error

// console.log(arr);

// let a = 3;
// let b = a;

// a = 5;

// console.log("a : ", a);
// console.log("b : ", b);
/**----------------- */

// let arr1 = [10, 20];
// arr1.push("new value");
// let arr2 = ["ahmed", true, ...arr1, 1, 2, 3, 4];

// console.log("arr1 ", arr1);
// console.log("arr2 ", arr2);
// let arr = [20, 40, 10, 33];

// console.log(Math.max(...arr));

// const arr = [10, 30];
//  arr = []
/** ------------------------ */
// let x = arr[0];
// let y = arr[1];
// let z = arr[2];

// let arr = ["mona", "ali", "ahmed"];

// function getArr(count) {
// 	return [
// 		count,
// 		function () {
// 			console.log(count);
// 		},
// 		50,
// 	];
// }

// let [x, z] = getArr("ali");

// console.log(x);
// z();

// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	color: true,
// };
// let person2 = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	color: "red",
// };

// // let { fname: fname, color: color } = person;
// let { fname, color } = person; // syntax suger
// let x = person.fname;
// let y = person.color;
// console.log(fname);
// console.log(color);

/**============== rest params ============= */

// function show(...rest) {
// 	console.log(rest);
// 	console.log("Hello dot net track");
// }

// show("mona", "ali", "ahmed");
/**============== */
// function show(x = "", y = "default") {
// 	console.log(x, y);
// 	console.log("Hello dot net track");
// }

// show("mona");

/**------------------- ----------------- */
// let str = "ali";
// let emoji = ":(";
// console.log(`Hello ${str} ${emoji} dot net track`);
/**------------------
 * ==includes
 * == trim
 * == trimStart
 * ==trimEnd
 * == startWith
 * == endWith
 * --------------- */
// let str = "Hello from iti";
// console.log(str.endsWith("iti"));

// console.log(`${str.trimEnd()},welcome`);
/**---------- Functions --------
 * -----------------------------
 * == built in functions
 * == user defined functions
 *      = function statement
 *      = function expression
 * ----------- */

/** function statement */
// add(3, 4);
// function add(x, y) {
// 	console.log(x + y);
// }

/**------------function expression--------- */
// add(10, 20);

// var add = function (x, y) {
// 	console.log(x + y);
// };

/**----------- Arrow Function ---------- */
// var add = (x = 0, y = 0) => {
// 	console.log(x + y);
// };

// add(20, 40);
// var add = (x = 0, y = 0) => {
// 	console.log("pt");
// 	return x + y;
// };

// console.log(add(20, 40));
// var result = add(20);
// console.log(result);
/**---------------------------------------- */
// this --> window
// var fname = "ali";
// function getName() {
// 	console.log(this.fname);
// }

// getName();
// let person = {
// 	fname: "alaa",
// 	display: getName,
// };

// person.display();
// window.getName();
/**---------------------------------------- */
// this --> window
// this --> person
// this --> window
// var fname = "ahmed";
// let person = {
// 	fname: "ali",
// 	display: function () {
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

/**------------------------------- */
// person.display();
// this -- window
// this person
// this -- window
// var fname = "ahmed";
// let person = {
// 	fname: "ali",
// 	display: () => {
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();
// this -- window
// var fname = "ahmed";
// let person = {
// 	fname: "ali",
// 	display: () => {
// 		console.log(this.fname);
// 	},
// };
// person.display();
// /**-------------------------- */

// function findElement(x, y, z) {
// 	console.log(x);
// 	console.log(y);
// 	console.log(z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) {
// 			return arr[i];
// 		}
// 	}

// }
// /**--------------- */

// for (let i = 0; i < 3; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("----------------");
// }
/**
 * -----------------
 */

// function show(x, y) {
// 	x(function () {
// 		console.log("From x1");
// 	});
// 	console.log("---------");
// 	y(30);
// }

// show(
// 	function (fname) {
// 		fname();
// 		console.log("dotnet");
// 	},
// 	function (num) {
// 		console.log(num);
// 		console.log("Second");
// 	}
// );
/**-------
 * Array APIS
 * --------------------
 * find
 * findIndex
 * map
 * filter
 * every
 * some
 * foreach
 * ------------ */
// let arr = [20, 30, 40, 10];

// var result = arr.map(function (item, index) {
// 	return `<div><h1>${item}</h1></div>`;
// });

// console.log(result);
// var result = arr.find((item, index) => {
// 	return item>35;
// });
// console.log(result);

// let products = [
// 	{
// 		id: 1,
// 		productName: "Book",
// 		cat: "school",
// 		price: 300,
// 	},
// 	{
// 		id: 2,
// 		productName: "Phone",
// 		cat: "elec",
// 		price: 1000,
// 	},
// 	{
// 		id: 3,
// 		productName: "Pen",
// 		cat: "school",
// 		price: 30,
// 	},
// 	{
// 		id: 4,
// 		productName: "Laptop",
// 		cat: "elec",
// 		price: 30,
// 	},
// ];
// let result = products.filter(function (item, index) {
// 	return item.id != 1;
// });

// console.log(result);

/**----------------- */

// let tracks = ["SD", "OS", "SPD"];

// let result = tracks.map((item) => {
// 	console.log(item);
// });
// console.log(result);
// console.log(tracks);
// let result = tracks.some(function (item) {
// 	return item.startsWith("S");
// });

// console.log(result);
