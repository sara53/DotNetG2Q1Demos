// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 5000);
// 	console.log("After second");
// }
// first();
/**--------------------- */

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Hello After First");
// console.log("Second");

// var x;
// setTimeout(() => {
// 	x = 10;
// 	console.log(x);
// }, 2000);
/**------------------------------ */

// let products;
// setTimeout(() => {
// 	products = [100, 200, 300];
// 	setTimeout(() => {
// 		var product = {
// 			id: products[0],
// 			productName: "Book",
// 			price: 30,
// 		};

// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);

// function getProducts() {
// 	let myPromise = new Promise(function (x, y) {
// 		let products;
// 		setTimeout(() => {
// 			products = [100, 300, 400];
// 			if (products) {
// 				x(products);
// 			} else {
// 				y("Error on getting products");
// 			}
// 		}, 2000);
// 	});

// 	return myPromise;
// }

// function getProduct(productId) {
// 	return new Promise(function (resolve, reject) {
// 		var product = {
// 			id: productId,
// 			productName: "book",
// 			price: 300,
// 		};
// 		product ? resolve(product) : reject("Error on getting product");
// 	});
// }
// function getPrice(product) {
// 	return new Promise(function (resolve, reject) {
// 		var price = product.price;
// 		price ? resolve(price) : reject("Error on getting Price");
// 	});
// }

// async function execute() {
// 	try {
// 		let products = await getProducts();
// 		let product = await getProduct(products[0]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// execute();
// getProducts()
// 	.then((products) => {
// 		return getProduct(products[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
/**
 * Pending
 * fulfilled
 * rejected
 */
// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function execute() {
// 	let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	let data = await response.json();
// 	console.log(data);
// }

// execute();
