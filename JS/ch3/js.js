// for loops

for(let i=0; i<5; i++){
    console.log('This is ',i);
}
console.log("FOR loop finished");

const array = ['fname', 'lname','fullname'];
for(let i = 0; i<array.length; i++){
    let html =  `<div>${array[i]}<div>`;
    console.log(html);
}


//while loop
let i = 0;
while(i<5) {
    console.log('This is ', i);
    i++;
}
console.log("WHILE loop finished");

//do-while loop

i = 0;
while (i < 5) {
    console.log('This is ', i);
    i++;
}
console.log("DO-WHILE loop finished");

// if statement
i = 8;
if(i<8){
    console.log('number is <8');
}
else if (i>8) {
    console.log('number is > 8')
}
else{
    console.log('number is 8');
}

const password = 'pass@12';
if(password.length >= 12 && password.includes('@')){
    console.log("That's a strong one");
}
else if(password.length >=8 || password.includes('@') && password.length >= 5){
    console.log("That's is strong enough");
}else{
    console.log("not strong");
}

//logical not
let user = false;
if(!user){
    console.log("It's true");
}
console.log('user = ',user);

// break and continue
const nums = [55, 25, 30, 80, 43, 76,14];

for(i=0; i<nums.length; i++){
    if(nums[i] === 25){
        continue; 
    }
    console.log('number = ',nums[i]);
    
    if(nums[i] === 80){
        console.log("Got the max num");
        break;
    }
}

//switch
const grade = 'D';

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('You got a D!');
        break;
    default:
        console.log('not valid');
        break;
}

let age = 30;

if(true===1){
    const age = 40;
    const name = 'name';
    console.log('inside 1st cide block: ', age, name);
    
    if (true===1) {
        const age = 40;
        const name = 'name';
        console.log('inside 2nd cide block: ', age, name);
    }

}
console.log('outside code block : ',age, name);