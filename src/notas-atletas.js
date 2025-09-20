//Entrada:
const atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];


//processamento e saída:

let entrada = atletas;
let mediaValida = 0;

for (let i = 0; i < entrada.length; i++) {
    let atleta = entrada[i];
    let notas = atleta.notas.slice();
    let listaMedia = atleta.notas.sort((a, b) => a - b);
    listaMedia.shift();
    listaMedia.pop();
    let soma =  listaMedia.reduce((acumulador, notaAtual) => {
        return acumulador + notaAtual;
    }, 0);
    mediaValida = soma / listaMedia.length;
    console.log(`Atleta: ${atleta.nome}\nNotas Obtidas: ${notas}\nMédia Válida: ${mediaValida.toFixed(2)}\n`);
}