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



// Bonus 1: Lorem ipsum generator

let paragraph= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";


let counter = 0
for(let i=0; i<paragraph.length;i++){
    console.log(paragraph[i])
    if (paragraph[i] === 'e' && paragraph[i+1] === 't'){
        counter ++
    }
}
console.log(`The number of times the Latin word 'et' appears is: ${counter}`)
console.log(paragraph.length);
