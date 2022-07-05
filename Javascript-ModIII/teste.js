// var y = 0;
/*var x=2;

dgtjtgfdf
fhdrhfd */
// console.log('Hello world!');

/*
function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} nao e par!`);
        }
    }   
    console.log("os numeros pares sao:",evenNums) ; 
}

let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);
*/

//let numberOne;
//numberOne = 1;
//console.log(numberOne+2)

/*
var firstName ="João"
let lastName ="Souza"
if(firstName ==="João"){
    var firstName = "Pedro";
    let lastName ="Silva"
}
console.log(firstName,lastName);
*/


//const FIRST_NAME = "Evelyn";
//console.log(FIRST_NAME);

/*
function verificaPalindrome(string){
    if(!string) return "string não existe";
    return string.split("").reverse("").join("") === string;
}

let a= "ovgato";
console.log(verificaPalindrome(""));
*/

/*
function verificaPalindrome2(string){
    if (!string) return "string não existe";

    for (let i = 0; i < string.length/2 ; i++) {
        if (string[i] !== string[string.length -1 -i]) {
            return false;
        }    
    }
    return true;
}


console.log(verificaPalindrome2("omo"));
*/

function subPares(array) {
    if (!array.length) return -1;
    for(let i=0; i < array.length; i++){
        if(array[i]===0){
            console.log("Você já é zero!")
        } else if (array[i]% 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    console.log(array);
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12];
subPares(array);