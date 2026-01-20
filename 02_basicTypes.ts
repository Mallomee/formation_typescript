/**
 * Exercice 02: Basic Types
 *
 * Créer quatre fonctions:
 *
 * 1. `add(a, b)` : additionne deux nombres et retourne un nombre
 *    Exemple: add(2, 3) => 5
 *
 * 2. `isAdult(age)` : retourne true si l'âge est >= 18, false sinon
 *    Exemple: isAdult(20) => true, isAdult(15) => false
 *
 * 3. `getFullName(firstName, lastName)` : concatène prénom et nom avec un espace
 *    Exemple: getFullName("John", "Doe") => "John Doe"
 *
 * 4. `greet(name?)` : retourne "Hello, {name}!" si un nom est fourni,
 *    ou "Hello!" si aucun nom n'est donné (paramètre optionnel)
 *    Exemple: greet("Alice") => "Hello, Alice!", greet() => "Hello!"
 */

// TODO: Implémenter les fonctions

export function add(a: number, b: number): number {
    return a + b;
}

export function isAdult(age: number): boolean {
    return age >= 18;
}

export function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

export function greet(name?: string): string {
    return name != undefined ? `Hello, ${name}!` : "Hello!";
}
