/**
 * Exercice 10: Arrays
 *
 * Créer deux fonctions:
 *
 * 1. `sumNumbers(numbers)` :
 *    - Prend un tableau de nombres
 *    - Retourne leur somme (number)
 *
 *    Exemple:
 *      sumNumbers([1, 2, 3]) => 6
 *      sumNumbers([]) => 0
 *      sumNumbers([10, -5, 3]) => 8
 *
 * 2. `filterLongWords(words, minLength)` :
 *    - Prend un tableau de strings
 *    - Prend une longueur minimale (number)
 *    - Retourne les mots dont la longueur est >= minLength
 *
 *    Exemple:
 *      filterLongWords(["hi", "hello", "world"], 4) => ["hello", "world"]
 *      filterLongWords(["a", "ab", "abc"], 2) => ["ab", "abc"]
 */

// TODO: Implémenter les fonctions

export function sumNumbers(numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export function filterLongWords(words: string[], minLength: number): string[] {
    return words.filter((word) => word.length >= minLength);
}
