//Meu jeito de fazer a comparacao entre 2 numeros.

function equalNumbers(num1,num2) {
    let simnao = 'não';
    if(num1 ===num2){
        simnao='';
    }
    
   console.log(`Os números ${num1} e ${num2} ${simnao} são iguais.`); 
}

function sumNumbers(num1,num2) {
    let maiormenor1 = '';
    let maiormenor2="";
    let soma = num1+num2;
    if(soma>10 ){
       maiormenor1 = 'maior';
    } else {
        maiormenor1 = "menor";
    }
    if(soma>20 ){
        maiormenor2 = 'maior';
     } else {
         maiormenor2 = "menor";
     }
   console.log(`Sua soma é ${soma}, que é ${maiormenor1} que 10 e ${maiormenor2} que 20.`); 
}

function compareNum(num1,num2){
    equalNumbers(num1,num2);
    sumNumbers(num1,num2);
}
let a = 1;
let b = 1;
compareNum(a,b);