/**
 * utilisez les nouveaux guillemets ` (alt gr + 7) pour concaténer le nom et le prénom passé en paramètre
 * Renvoi le résultat
 *
 * exemple: "John", "Doe" => "John Doe"
 *
 * contrainte:
 *  - ne pas utiliser l'opérateur +
 *  - ne pas utiliser la fonction concat de String
 */

const concat = (nom, prenom) => `${prenom} ${nom}`;

module.exports = {concat};