const anoNascimento = 2004;
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;

document.getElementById("idade").textContent = idade;
document.getElementById('ano').textContent = anoAtual;