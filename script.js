let piloName = prompt("Qual seu nome, piloto?");

let velocity = 0;

let newVelocity = prompt("A qual velocidade voce gostaria de acelerar?");

let confirmVelocity = confirm(
  "Estamos acelerando para " + newVelocity + "Km/s"
); //confirma o valor da velocidade

if (confirmVelocity) {
  velocity = newVelocity;
}
// verificando o nivel da velocidade
if (velocity <= 0) {
  alert("Nave se encontra em repouso, considere aumentar a velocidade...");
} else if (velocity < 40) {
  alert("Velocidade baixa. Podemos aumentar mais.");
} else if (velocity < 80) {
  alert("Velocidade adequada, recomenda-se mante-la!");
} else if (velocity < 100) {
  alert("Velocidade alta. Considere reduzi-la...");
} else {
  alert(
    "Você chegou a uma velocidade de risco, devido a isso o piloto automatico foi ativado!"
  );
}

alert("Piloto: " + piloName + "\nVelocidade: " + velocity + "Km/s");