// M = C + ( C * i * t)
const jurosSimples = (capital, taxa, tempo) => capital + (capital * taxa * tempo);

//M = C * (1 + i)**t
const jurosCompostos = (capital, taxa, tempo) => capital * (1 + taxa)**tempo;

console.log(`Juros simples: ${jurosSimples(1000, 0.05, 12)} \nJuros compostos: ${jurosCompostos(1000, 0.05, 12).toFixed(2)}`);
