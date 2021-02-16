//alert('Hey');

//You can see this on the console only.
console.log(827);

// This way you can define any variable.
let age = 10;
console.log(age);

age = 100;
console.log(age);

const point = 8272;
console.log(point);

//  point = 98;
// this can't be done with the const variable.

//strings
console.log('Hello, world');

let email = 'firstname@last.name.com';
console.log(email);

// concatination is so easy in js. 
let fname = 'FirstName';
let lname = 'LastName';
let fullname = fname + ' ' + lname;
console.log(fullname);

// get the characters.
console.log(fullname[4]);

//string length
console.log(fullname.length)


//string methods
console.log(fullname.toUpperCase());

let result = fullname.toLocaleLowerCase();
console.log(result, fullname);

let index = email.indexOf('@');
console.log(index);

let ans = email.lastIndexOf('n');
console.log(ans);

// This will tell us how differently slice can work
let ans1 = email.slice(6);
console.log(ans1);
ans1 = email.slice(0,6);
console.log(ans1);


// This will tell us how differently substr can work
let ans2 = email.substr(8);
console.log(ans2);
ans2 = email.substr(3,8);
console.log(ans2);

// This will tell us how differently substring can work
let ans3 = email.substring(8);
console.log(ans2);
ans3 = email.substring(3, 8);
console.log(ans2);


// This will tell us how differently replace can work
let ans4 = email.replace('n','p');
console.log(ans4);


//Mathematical operations
let rad = 10;
const pi = 3.14;
console.log('rad = '+rad + ' pi = '+pi);
let sol = pi * rad**2;
console.log('area = '+sol);

console.log('216 / 4 = '+ 216/4);

let num = 6;
console.log("num => "+ num++);

console.log("num++ => "+ num);
console.log("++num => "+ ++num);
console.log("num-- => "+ num);
console.log("--num => "+ --num);

num += 10;
console.log("num += 10 \n num = "+num);

let sent = 'Here are some numbers and characters or strings '+ ans +' '+ans2+ ' '+ans3;
console.log(sent);

sent = `Here are some numbers and characters or strings ${ans} ${ans2} ${ans3}` ;
console.log(sent);


//html templates

let html = `
    <h2>${ans}</h2>
    `;
console.log(html);

//arrays

let array = ['first','last','name','here'];
console.log(array);
console.log(array[1]);

array[1] = 'changed';
console.log(array[1]);

let mixed = ['strings', 'a', 5, 6.54,['even another array', 'f', 2, 66.5]];
console.log(mixed);
console.log(mixed[4]);

//methods
ans = array.length;
console.log('array.length = ',ans);

ans = array.join('__');
console.log("array.join('__') => ",ans)

ans = array.concat(['one','two','three']);
console.log("  array.concat(['one', 'two', 'three']) => ",ans);

ans = array.push('pushing');
console.log("array.push('pushing') => ", array);


ans = array.pop();
console.log("array.pop() => ",ans);
console.log("array => ",array);

ans = Number('hello');
console.log("Number('hello') => ",ans);
ans = String(50);
console.log("String(50) => ",ans);
ans = Boolean('');
console.log("Boolean('') => ",ans);
ans = Boolean(0);
console.log("Boolean(0) => ",ans);
