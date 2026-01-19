/**
 * Exercice 05: Enumeration
 *
 * 1. Définir une énumération `Color` avec les valeurs:
 *    - Red = "Red"
 *    - Green = "Green"
 *    - Blue = "Blue"
 *
 * 2. Créer une fonction `getColorCode(color)` qui retourne le code hexadécimal:
 *    - Color.Red => "#FF0000"
 *    - Color.Green => "#00FF00"
 *    - Color.Blue => "#0000FF"
 *
 * Exemple:
 *   getColorCode(Color.Red) => "#FF0000"
 *   getColorCode(Color.Green) => "#00FF00"
 *   getColorCode(Color.Blue) => "#0000FF"
 */

// TODO: Définir l'enum Color et implémenter getColorCode

export enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

export function getColorCode(color: Color): string {
    return color === "Red" ? "#FF0000" : color === "Green" ? "#00FF00" : color === "Blue" ? "#0000FF" : "";
}
