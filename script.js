let piloName = prompt("Qual seu nome, piloto?");

let velocity = 0;

let newVelocity = prompt("A qual velocidade voce gostaria de acelerar?");

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "Km/s")

if(confirmVelocity){
    velocity = newVelocity;
}

console.log(velocity);