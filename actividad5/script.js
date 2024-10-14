// Clase Nodo para representar cada palabra
class Nodo {
    constructor(data) {
        this.data = data; // Almacena la palabra
        this.next = null; // Apuntador al siguiente nodo
    }
}

// Clase ListaEnlazada para manejar la lista de palabras
class ListaEnlazada {
    constructor() {
        this.head = null; // La cabeza de la lista enlazada
    }

    // Método para agregar una palabra a la lista
    append(data) {
        const newNode = new Nodo(data);
        if (!this.head) {
            this.head = newNode; // Si la lista está vacía, el nuevo nodo es la cabeza
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Avanzar al último nodo
            }
            current.next = newNode; // Añadir el nuevo nodo al final
        }
    }

    // Método para recorrer la lista y ejecutar una función en cada nodo
    forEach(callback) {
        let current = this.head;
        while (current) {
            callback(current.data); // Ejecutar la función en el dato del nodo
            current = current.next; // Avanzar al siguiente nodo
        }
    }

    // Método para limpiar la lista
    clear() {
        this.head = null; // Restablecer la cabeza a null
    }
}

// Clase GestorPalabras para manejar la entrada y clasificación de palabras
class GestorPalabras {
    constructor() {
        this.wordLists = {}; // Objeto para almacenar listas clasificadas por letra
    }

    // Método para agregar una palabra
    addWord(word) {
        const firstLetter = word.charAt(0).toUpperCase(); // Obtener la primera letra y convertir a mayúscula
        if (!this.wordLists[firstLetter]) {
            this.wordLists[firstLetter] = new ListaEnlazada(); // Crear nueva lista si no existe
        }
        this.wordLists[firstLetter].append(word); // Añadir la palabra a la lista correspondiente
    }

    // Método para mostrar todas las listas
    displayLists() {
        const wordListsElement = document.getElementById('wordLists');
        wordListsElement.innerHTML = ''; // Limpiar la lista anterior

        for (const letter in this.wordLists) {
            const words = this.wordLists[letter];
            const li = document.createElement('li');
            li.textContent = `Lista ${letter}: `;
            const wordArray = [];
            words.forEach((word) => {
                wordArray.push(word);
            });
            li.textContent += wordArray.join(', '); // Mostrar palabras en la lista
            wordListsElement.appendChild(li); // Añadir la lista al elemento HTML
        }
    }
}

// Crear una instancia del gestor de palabras
const gestorPalabras = new GestorPalabras();

// Event listener para el formulario
document.getElementById('wordForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    const wordInput = document.getElementById('wordInput');
    gestorPalabras.addWord(wordInput.value); // Agregar la palabra
    wordInput.value = ''; // Limpiar el campo de entrada
    gestorPalabras.displayLists(); // Mostrar listas actualizadas
});
