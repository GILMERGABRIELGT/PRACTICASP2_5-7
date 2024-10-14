// Clase Nodo para representar cada letra en la lista enlazada
class Nodo {
    constructor(data) {
        this.data = data; // La letra que será el dato del nodo
        this.next = null; // Apuntador al siguiente nodo
    }
}

// Clase ListaEnlazada para manejar la lista de letras
class ListaEnlazada {
    constructor() {
        this.head = null; // La cabeza de la lista enlazada
    }

    // Método para añadir una letra al final de la lista
    append(data) {
        const newNode = new Nodo(data);
        if (!this.head) {
            this.head = newNode; // Si la lista está vacía, el nuevo nodo es la cabeza
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Avanzar hasta el último nodo
            }
            current.next = newNode; // Añadir el nuevo nodo al final
        }
    }

    // Método para invertir la lista de letras
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const nextNode = current.next; // Guardar el siguiente nodo
            current.next = prev; // Invertir el apuntador
            prev = current; // Mover prev hacia adelante
            current = nextNode; // Mover current hacia adelante
        }
        this.head = prev; // Actualizar la cabeza de la lista
    }

    // Método para obtener todas las letras en la lista como un array
    getLetters() {
        const letters = [];
        let current = this.head;
        while (current) {
            letters.push(current.data);
            current = current.next;
        }
        return letters;
    }

    // Método para limpiar la lista
    clear() {
        this.head = null;
    }
}

// Clase InversorPalabras para manejar la lógica de inversión
class InversorPalabras {
    constructor() {
        this.lista = new ListaEnlazada(); // Usar la lista enlazada
    }

    // Método para agregar letras y mostrar la palabra invertida
    addWord(word) {
        this.lista.clear(); // Limpiar la lista antes de agregar la nueva palabra

        // Agregar cada letra de la palabra a la lista enlazada
        for (let letter of word) {
            this.lista.append(letter);
        }

        // Invertir la lista
        this.lista.reverse();

        // Mostrar la palabra invertida
        this.displayReversedWord();
    }

    // Método para mostrar la palabra invertida en el HTML
    displayReversedWord() {
        const reversedWord = this.lista.getLetters().join('');
        document.getElementById('reversedWord').textContent = reversedWord;
    }
}

// Crear una instancia de InversorPalabras
const inversor = new InversorPalabras();

// Event listener para el formulario
document.getElementById('wordForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    const wordInput = document.getElementById('wordInput');
    inversor.addWord(wordInput.value); // Agregar la palabra
    wordInput.value = ''; // Limpiar el campo de entrada
});
