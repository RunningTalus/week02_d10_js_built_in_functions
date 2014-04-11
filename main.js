//BUILT-IN JAVASCRIPT

//STRINGS- #indexOf, #substring, #split, #toUpperCase, #toLowerCase, #trim


//indexOf(substr)
console.log('String indexOf: ', 'hello world'.indexOf('hell'));
	//logs String indexOf: 0
	//indexOf returns the start of the index and ONLY the first occurence

console.log('String indexOf: ', 'hello world'.indexOf('nope'));
	//logs String indexOf: -1
	//will log -1 when not found


//substring(indexA [, indexB])
console.log('String substring:', 'hello world'.substring(4));
	//logs String substring: "o world"
console.log('String substring:', 'hello world'.substring(4, 7));
	//logs String substring: "o w"


//split
console.log('String split:', 'hello world'.split(' '));
	//logs String split: ["hello", world"]
console.log('String split:', 'hello world'.split(''));
	//logs String split: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"] 


//toUpperCase() 
console.log('String toUpperCase: ', 'hello world'.toUpperCase() );
	//logs String toUpperCase: HELLO WORLD


//toLowerCase()	
console.log('String toLowerCase: ', 'HELLO WORLD'.toLowerCase() );
	//logs String toLowerCase: hello world


//trim()
//Removes whitespace from the beginning and end of a string
console.log('String trim: ', '      hello world    '.trim() );
	//logs String trim: hello world 

//

//ARRAYS - #isArray, #indexOf, #slice, #splice, #join, #concat, #reverse, #sort


//Array.isArray(object)

console.log('Array.isArray: ', Array.isArray('hello world') );
	//logs Array.isArray: false
console.log('Array.isArray: ', Array.isArray([0,1,2,3,4]) );
	//logs Array.isArray: true
console.log('Array.isArray: ', Array.isArray({a:1, b:2, c:3}) );
	//logs Array.isArray: false


//Array.indexOf(term)

console.log('Array.indexOf: ', ['hi','bye'].indexOf('bye'));
	//logs Array.indexOf: 1
console.log('Array.indexOf: ', ['hi','bye'].indexOf('nope'));
	//logs Array.indexOf: -1
		//logs -1 when not found in the array


//slice(begin [, end])

	//like "copy" for arrays
	//non-destructive
var testArray = ['hi', 'hello', 'bye'];
console.log('Array slice: ', testArray.slice(1), testArray);
	//logs Array slice:  ["hello", "bye"] ["hi", "hello", "bye"] 
	//slices items out of the array with starting and ending items
		//returns QTY#2 arrays

var testArray = ['hi', 'hello', 'bye'];
console.log('Array slice: ', testArray.slice(1, 2), testArray);
	//logs Array slice:  ["hello"] ["hi", "hello", "bye"] 
	//slices items out of the array with starting and ending items
		//not inclusive of item at second slice argument, does not include


//splice

//splice( begin [,end])
	//like "cut" for arrays
	//destructive(modifies the original)
	//optional third parameters are items to be inserted where items were removed
//splice(indexA[,number to remove, items])
	//returns removed items
	//can inject new passed items

var myArray=['hi','hello','bye'];
console.log('Array splice: ', myArray.splice(1,2), myArray);
	//logs Array splice: ["hello", "bye"] ["hi"] 

var myArray=['hi', 'hello', 'bye'];
console.log('Array splice: ', myArray.splice(1,1), myArray);
	//logs Array splice: [] ['hi']

var myArray=['hi', 'hello', 'bye'];
console.log('Array splice: ', myArray.splice(1,1,'test1','test2'),myArray);
	//logs Array splice:  ["hello"] ["hi", "test1", "test2", "bye"] 


//join(separator)

	//join the items in the array together using the given separator and return as a string
console.log('Array join: ', ['hello', 'world'].join(' ') );
	//logs Array join:  hello world 
console.log('Array join: ', ['hello', 'world'].join(' something ') );
	//logs Array join:  hello something world 


//concat(arr...)

	//join multiple arrays into one big array
var yosemite=['The Nose', 'North American Wall', 'Midnight Lightning'];
var redRocks=['Cat in the Hat', 'Levitation 29'];
var eldorado=['Naked Edge'];
console.log('Array concat: ', yosemite.concat(redRocks, eldorado) );
	//logs Array concat:  ["The Nose", "North American Wall", "Midnight Lightning", "Cat in the Hat", "Levitation 29", "Naked Edge"] 


//reverse

	//reverse the order of the whole array
console.log('Array join: ', ['hello','world'].reverse() );
	//logs Array join:  ["world", "hello"] 
console.log('Array join: ', ['hello', 'world'].reverse().join(' ') );
	//Array join:  world hello 
console.log('Array join: ', 'Hello world'.split('').reverse().join('') );
	//Array join:  dlrow olleH 


//sort

//sort([compareFunction(a, b)])
	//allows you to sort an array
	//by default, not passing a compare function will sort by converting each item to a string and doing a string comparison
	//see examples of custom sort functions below

var testArr=[5, 2, 10, 6, 3];
console.log('Array sort: ', testArr.sort() );
	//logs Array sort:  [10, 2, 3, 5, 6] 

var testArr2= ['a', 'd', 'f', 'b'];
console.log('Array sort: ', testArr2.sort() );
	//logs Array sort:  ["a", "b", "d", "f"] 

//if function(a,b) > 0, a comes first
//if function(a,b) < 0, b comes first
//if function(a,b) === 0, no change

//sort numerically
var testArr=[5, 2, 10, 6, 3];
var numSort=function(a,b){
	return a-b;
}
console.log('Array sort: ', testArr.sort(numSort) );
	//logs Array sort:  [2, 3, 5, 6, 10] 


//sort DESCENDING (inverted from default)
var testArr2= ['a', 'd', 'f', 'b'];
var otherSort = function(a,b){
	if(a===b)
		return 0;
	if (a<b)
		return 1;
	else
		return -1;
}
console.log('Array sort: ', testArr2.sort(otherSort) );
	//logs Array sort:  ["f", "d", "b", "a"] 


//sort objects on a custom property
var testObjects = [
	{propA: 10, propB: 'hello'},
	{propA: 2, propB: 'hey'},
	{propA: 20, propB: 'world'}
];

//numerically compare propA
var obSort = function(a,b){
	return a.propA-b.propA;
};
console.log('Array sort: ', testObjects.sort(obSort) );
	// Array sort:  
	// [Object, Object, Object]
	// 0: Object
	// propA: 2
	// propB: "hey"
	// __proto__: Object
	// 1: Object
	// propA: 10
	// propB: "hello"
	// __proto__: Object
	// 2: Object
	// propA: 20
	// propB: "world"
	// __proto__: Object
	// length: 3
	// __proto__: Array[0]













































