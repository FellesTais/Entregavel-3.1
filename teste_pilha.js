import { Stack } from "./pilha.js";

const pilha = new Stack();

// Push
pilha.push(10);
pilha.push(20);
pilha.push(30);

console.log("Topo:", pilha.top.value);
console.log("Segundo:", pilha.top.next.value);
console.log("Terceiro:", pilha.top.next.next.value);
console.log("Tamanho:", pilha.size);