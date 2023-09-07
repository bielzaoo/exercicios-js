/*
Faça uma função que retorne:
numero Divisivel por 3 = Fizz
numero Divisivel por 5 = Buzz
Por 3 e por 5 = FizzBuzz
Não é divisivel por 3 nem por 5 retorna o proprio numero
checar se o numero realmente é um numero
testar com numeros de 0 a 100

*/

function fizzBuzz(n) {
    if (typeof n !== 'number') return n;

    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if(n % 3 === 0) return "Fizz";
    if(n % 5 === 0) return "Buzz";
    

    return n;
};

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));  
}