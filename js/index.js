// Iteration 1: Names and Input
let hacker1 = 'Matias';
console.log("The driver's name is " +hacker1);

let hacker2 = 'Horacio';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let longestName = '';
for(let i=0; i<hacker2.length;i++){
    longestName = longestName + hacker2[i];
}
console.log(`It seems that the navigator has the longest name, it has ${longestName.length} characters.`)

// Iteration 3: Loops

let hacker1Capitals = '';
for(let i=0; i<hacker1.length;i++){
    hacker1Capitals += hacker1[i] + ' ';
}
hacker1Capitals = hacker1Capitals.toUpperCase();

console.log(hacker1Capitals);

let hacker2Reverse = '';
for(let i=hacker2.length -1; i>=0;i--){
    hacker2Reverse += hacker2[i]; 
}
console.log(hacker2Reverse);



for(let i=0; i< hacker1.length;i++){
    if(hacker1[i]<hacker2[i]){
        console.log("The driver's name goes first");
        break;
    }else if (hacker1[i]>hacker2[i]){
        console.log("Yo, the navigator goes first definitely");
        break;
    }else  if (hacker1[i]===hacker2[i]){
        console.log ("What? you both have the same name" );
    }else {
        break;
    }
}


