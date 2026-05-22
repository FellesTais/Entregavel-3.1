class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.head = null; // O primeiro elemento da fila (quem sai primeiro)
    this.tail = null; // O último elemento da fila (quem entrou por último)
    this.size = 0; // Controle de quantidade de elementos
  }

  /**
   * Adiciona um novo elemento ao final da fila (Enqueue).
   * Se a fila estiver vazia, o novo nó será tanto o head quanto o tail.
   */
  queue(value) {
    const nextNode = new Node(value);

    if (this.head === null) {
      this.head = nextNode;
      this.tail = nextNode;
    } else {
      this.tail.next = nextNode;
      this.tail = nextNode;
    }

    this.size++;
  }

  /**
   * Remove e retorna o valor do elemento que está na frente da fila (Dequeue).
   * Lembre-se de atualizar o 'head' para o próximo nó e tratar o caso de fila vazia.
   */
  dequeue() {
    if (this.head === null) {
      return null;
    }

    const removedValue = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.size--;
    return removedValue;
  }

  /**
   * Percorre a fila do início ao fim imprimindo cada valor no console.
   */
  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  /**
   * Retorna o valor do primeiro elemento da fila sem removê-lo.
   * Se a fila estiver vazia, retorne null ou undefined.
   */
 peek() {
    return this.head ? this.head.value : null;
  }

  /**
   * Retorna um booleano: true se a fila não tiver elementos, false caso contrário.
   */

 isEmpty() {
    return this.size === 0;
  }

  /**
   * Retorna a quantidade atual de elementos na fila.
   */
  length() {
    return this.size;
  }

  /**
   * Remove todos os elementos da fila, resetando head, tail e size.
   */
  clear() {

    this.head = null;
    this.tail = null;
    this.size = 0;
    // Implementar aqui
  }

  /**
   * Verifica se um valor específico está presente em algum nó da fila.
   * Retorna true ou false.
   */
  includes(value) {
    let current = this.head;
    while (current !== null) {
        if(current.value === value) return true;
        current = current.next;
    }
    return false;
  }

  /**
   * Cria e retorna um Array JavaScript contendo todos os valores da fila,
   * mantendo a ordem do primeiro (índice 0) ao último.
   */
  toArray() {
    const result = [];
    let current = this.head;
    while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  return result;
  }

  /**
   * Aplica uma função de callback em cada elemento e retorna uma NOVA Queue
   * com os resultados, seguindo o comportamento do Array.map().
   */
  map(callback) {

    const newQueue = new Queue();
    let current = this.head;
    while (current !== null) {
        newQueue.queue(callback(current.value));
        current = current.next;
    }
    return newQueue


    // Implementar aqui
  }

  /**
   * Retorna uma NOVA Queue contendo apenas os elementos que passarem
   * no teste implementado pela função callback (deve retornar true).
   */
  filter(callback) {
  const newQueue = new Queue();
  let current = this.head;
  while (current !== null) {
    if (callback(current.value)) newQueue.queue(current.value);
    current = current.next;
  }
  return newQueue;
}

  /**
   * Executa uma função redutora sobre cada elemento da fila, resultando em um único valor de retorno.
   * (Ex: somar todos os valores).
   */
  reduce(callback, initialValue) {
  let accumulator = initialValue;
  let current = this.head;
  while (current !== null) {
    accumulator = callback(accumulator, current.value);
    current = current.next;
  }
  return accumulator;
    // Implementar aqui manu
  }
}