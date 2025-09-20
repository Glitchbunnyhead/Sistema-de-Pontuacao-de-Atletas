# Cálculo de Média de Notas de Atletas

Este projeto é um script JavaScript simples que calcula a média válida das notas de um grupo de atletas. Para evitar distorções, a nota mais alta e a mais baixa de cada atleta são descartadas antes do cálculo.

## Como Funciona

O script processa uma lista de atletas, onde cada um possui um nome e um conjunto de notas. Para cada atleta, ele segue estes passos:

1. Cria uma cópia da lista de notas para não alterar a lista original.
2. Ordena a lista de notas em ordem crescente.
3. Remove a nota mais baixa (a primeira do array ordenado) e a nota mais alta (a última do array ordenado).
4. Soma as notas restantes.
5. Divide a soma pelo número de notas restantes para obter a média válida.
6. Imprime o nome do atleta, suas notas originais e a média calculada.

## Formato da Entrada (Dados)

A entrada deve ser um array de objetos, onde cada objeto representa um atleta. Cada objeto deve ter a seguinte estrutura:

- `nome`: uma string com o nome completo do atleta.
- `notas`: um array de números (inteiros ou decimais) com as notas.

### Exemplo de Estrutura

```javascript
const atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  }
];
```

## Saída no Console

Ao ser executado, o script gera o seguinte resultado no console:

```
Atleta: Cesar Abascal
Notas Originais: 10,9.34,8.42,10,7.88
Média Válida: 9.25

Atleta: Fernando Puntel
Notas Originais: 8,10,10,7,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Originais: 7,10,9.5,9.5,8
Média Válida: 9.00

Atleta: Bruno Castro
Notas Originais: 10,10,10,9,9.5
Média Válida: 9.83
```
