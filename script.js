for (num = 1; num < 11; num++) {
    console.log("5 x ", num, " = ", 5 * num);
}
for (num = 1; num < 11; num++) {
    console.log("3 x ", num, " = ", 3 * num);
}

function tabuada(tab){
    
    for(num=1; num < 11; num++){
        console.log(tab, " x ", num, " = ", tab * num);
    }
}

dia = new Date()
console.log("Dia ",dia.getDate())
console.log("Do Mês ",dia.getMonth())
console.log("Do Ano ",dia.getFullYear())
console.log("São ",dia.getHours()," Horas")
console.log("Com ",dia.getMinutes()," Minutos")
console.log("E ",dia.getSeconds()," Segundos")

console.log(dia)

const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let name = month[dia.getMonth()];

document.getElementById("mes").innerHTML = name;
document.getElementById("dia").innerHTML = dia.getDate();
document.getElementById("ano").innerHTML = dia.getFullYear();

