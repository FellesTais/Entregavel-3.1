// É obrigatório utilizar a lógica de LinkedList na implementação!
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.top = null; // O topo da pilha (único ponto de entrada e saída)
    this.size = 0; // Contador de elementos
  }

  /**
   * Adiciona um elemento ao topo da pilha (Push).
   * O novo nó deve apontar para o antigo topo, e o topo passa a ser o novo nó.
   */
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  /**
   * Remove e retorna o valor do elemento que está no topo da pilha (Pop).
   * Deve atualizar o topo para o próximo nó. Tratar caso de pilha vazia.
   */
  pop() {
    if (this.top === null) {
      return null;
    }

    const removedValue = this.top.value;
    this.top = this.top.next;
    this.size--;

    return removedValue;
  }

  /**
   * Retorna o valor que está no topo da pilha sem removê-lo (Peek).
   */
  peek() {
    if (this.top === null) {
      return null;
    }

    return this.top.value;
  }

  /**
   * Retorna true se a pilha estiver vazia.
   */
  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }

  /**
   * Retorna o número de elementos na pilha.
   */
  length() {
    return this.size;
  }

  /**
   * Esvazia a pilha completamente.
   */
  clear() {
    this.top = null;
    this.size = 0;
  }

  /**
   * Percorre a pilha do topo até a base, imprimindo os valores.
   */
  print() {
    let current = this.top;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  /**
   * Converte a pilha em um Array.
   * Nota: O índice 0 deve ser o topo da pilha para refletir a ordem de saída.
   */
  toArray() {
    const result = [];
    let current = this.top;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  /**
   * Procura um item na pilha. Retorna true se encontrar.
   */
  includes(item) {
    let current = this.top;

    while (current !== null) {
      if (current.value === item) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  /**
   * Inverte a ordem dos elementos na pilha.
   * (Desafio extra para os alunos!)
   */
  reverse() {
    let prev = null;
    let current = this.top;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.top = prev;
  }
}
