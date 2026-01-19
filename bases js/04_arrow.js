
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clé "function" est interdit
 */

let arrow1 = (param) => {
    return param+1
}

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clé "function" est interdit
 *   - le mot clé "return" est interdit
 */

let arrow2 = param => param+1

module.exports = {arrow1, arrow2};