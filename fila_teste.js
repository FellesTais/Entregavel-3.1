// Execute no terminal: node fila_teste.js

import { Queue } from "./fila.js";

console.log("========================================");
console.log(" --- TESTE DE FILA --- ");
console.log("========================================\n");

const fila = new Queue();

console.log("\n--- Elementos da fila ---\n");


fila.queue(10);
fila.queue(20);
fila.queue(30);
fila.queue(40);
fila.queue(0);


console.log("Primeiro da fila:", fila.head.value);
console.log("Segundo da fila:", fila.head.next.value);
console.log("Ultimo da fila:", fila.tail.value);
console.log("Tamanho da fila:", fila.size);


console.log("\n--- Consultar o primeiro da fila ---\n");
console.log("Valor do primeiro:", fila.peek());


console.log("\n--- Ver se a fila esta vazia ---\n");
console.log("A fila esta vazia?", fila.isEmpty());


console.log("\n--- Quantos tem na fila ---\n");
console.log("Quantidade de elementos:", fila.length());


console.log("\n--- Verifica se existe o valor na fila ---\n");
console.log("Contem o valor 50?", fila.includes(50));
console.log("Contem o valor 40?", fila.includes(40));


console.log("\n--- Transforma a fila em array ---\n");
console.log("Fila em array:", fila.toArray());


console.log("\n--- Imprimi os elementos da fila ---\n");
fila.print();


console.log("\n--- Dobra cada numero da fila ---\n");
const filaDobrada = fila.map((num) => num * 2);
console.log("Fila original:", fila.toArray());
console.log("Fila mapeada:", filaDobrada.toArray());


console.log("\n--- Fila apenas com numeros pares ---\n");
const filaPares = fila.filter((num) => num % 2 === 0);
console.log("Fila original:", fila.toArray());
console.log("Fila filtrada:", filaPares.toArray());



console.log("\n--- Soma todo os valors dos numeros da fila ---\n");
const soma = fila.reduce((acumulador, valor) => acumulador + valor, 0);
console.log("Soma total:", soma);



console.log("\n--- Remove o primeiro da fila ---\n");
console.log("Removido:", fila.dequeue());
console.log("Removido:", fila.dequeue());
console.log("Fila apos duas remocoes:", fila.toArray());
console.log("Primeiro agora (head):", fila.head.value);
console.log("Tamanho:", fila.size);


console.log("\n--- Esvazia o restante da fila ---\n");
console.log("Removido:", fila.dequeue());
console.log("Fila vazia?", fila.isEmpty());
console.log("Fila vazia retorna:", fila.dequeue());


console.log("\n--- Limpa a fila ---\n");

fila.queue("A");
fila.queue("B");
fila.queue("C");
console.log("Antes do clear:", fila.toArray());

fila.clear();
console.log("Depois do clear - tamanho:", fila.size);
console.log("Depois do clear - vazia?", fila.isEmpty());
console.log("Depois do clear - peek():", fila.peek());


console.log("\n--- Teste primeiro a entrar, primeiro a sair) ---\n");

const filaFifo = new Queue();
filaFifo.queue("Ana");
filaFifo.queue("Bruno");
filaFifo.queue("Carla");

console.log("Ordem de entrada:", filaFifo.toArray());
console.log("Sai primeiro:", filaFifo.dequeue());
console.log("Sai segundo:", filaFifo.dequeue());
console.log("Quem ficou na fila:", filaFifo.toArray());

