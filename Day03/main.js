export function add(x, y) {
	return x + y;
}

export function square() {
	console.log(add(5, 6) * 2);
}

export let fname = "ali";

export default function show() {
	console.log("show");
}

export { add, square, fname };
