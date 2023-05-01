dia = new Date()

const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let name = month[dia.getMonth()];

document.getElementById("mes").innerHTML = name;
document.getElementById("dia").innerHTML = dia.getDate();
document.getElementById("ano").innerHTML = dia.getFullYear();

