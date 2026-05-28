import { Stack } from "./pilha.js";

const pilha = new Stack();

console.log("------------------------------------Push-------------------------------------");
pilha.push(5);
pilha.push(10);
pilha.push(15);
pilha.push(20);
pilha.push(25);

console.log("Topo:", pilha.top.value);
console.log("Segundo:", pilha.top.next.value);
console.log("Terceiro:", pilha.top.next.next.value);
console.log("Quarto:", pilha.top.next.next.next.value);
console.log("Quinto:", pilha.top.next.next.next.next.value);

console.log("------------------------------------Pop--------------------------------------");
pilha.pop();

console.log("Novo topo:", pilha.top.value);

pilha.pop();

console.log("Novo topo:", pilha.top.value);

console.log("------------------------------------Peek--------------------------------------");
console.log("Busca do topo:", pilha.peek());

console.log("----------------------------------isEmpty-------------------------------------");
console.log("Pilha vazia?", pilha.isEmpty());

console.log("----------------------------------Length--------------------------------------");
console.log("Tamanho:", pilha.length());

console.log("----------------------------------Print---------------------------------------");
console.log("Pilha completa:");
pilha.print();

console.log("---------------------------------Reverse--------------------------------------");
pilha.reverse();

console.log("Pilha invertida:");
pilha.print();


console.log("---------------------------------Includes--------------------------------------");
console.log("Contém na pilha?", pilha.includes(5));
console.log("Contém na pilha?", pilha.includes(6));

console.log("----------------------------------Array----------------------------------------");
console.log("Array:", pilha.toArray());

console.log("----------------------------------Clear----------------------------------------");
pilha.clear();
console.log("Pilha vazia?", pilha.isEmpty());
console.log("Topo:", pilha.top);
console.log("Array:", pilha.toArray());
