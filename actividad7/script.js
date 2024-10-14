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

    // Método para agregar una letra a la lista
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

    // Método para verificar si la lista representa un palíndromo
    isPalindrome() {
        let current = this.head;
        const stack = [];

        // Recorrer la lista y almacenar las letras en una pila
        while (current) {
            stack.push(current.data);
            current = current.next;
        }

        // Comprobar si las letras coinciden con las que están en la lista
        current = this.head;
        while (current) {
            const letter = stack.pop(); // Obtener la última letra de la pila
            if (current.data !== letter) {
                return false; // Si hay una discrepancia, no es un palíndromo
            }
            current = current.next;
        }
        return true; // Si todas las letras coinciden, es un palíndromo
    }
}

// Clase PalindromeChecker para manejar la lógica del verificador de palíndromos
class PalindromeChecker {
    constructor() {
        this.wordList = new ListaEnlazada(); // Usar la lista enlazada para almacenar letras
    }

    // Método para procesar la palabra ingresada
    checkPalindrome(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const input = document.getElementById('wordInput').value;
        this.wordList = new ListaEnlazada(); // Reiniciar la lista de letras

        // Agregar cada letra de la palabra a la lista
        for (let letter of input) {
            this.wordList.append(letter.toLowerCase()); // Normalizar a minúsculas
        }

        // Verificar si es un palíndromo
        const result = this.wordList.isPalindrome();
        document.getElementById('result').textContent = result ? `${input} es un palíndromo.` : `${input} no es un palíndromo.`;
        document.getElementById('palindromeForm').reset(); // Limpiar el formulario
    }
}

// Crear una instancia de PalindromeChecker
const palindromeChecker = new PalindromeChecker();

// Event listener para el formulario
document.getElementById('palindromeForm').addEventListener('submit', (event) => palindromeChecker.checkPalindrome(event));
