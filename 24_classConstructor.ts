/**
 * Exercice 24: Classes - Constructeur
 *
 * Importer la classe Point de l'exercice précédent (23_classBasic)
 *
 * Créer une classe `Rectangle` avec :
 * - Propriété privée `topLeft` de type `Point`
 * - Propriétés privées `width` et `height`
 * - Un constructeur qui prend un `Point`, `width` et `height`
 * - Méthodes `getWidth()` et `getHeight()`
 * - Méthode `getTopLeft()` qui retourne le point
 * - Méthode `getArea()` qui retourne l'aire
 * - Méthode `getPerimeter()` qui retourne le périmètre

 */

// TODO: Importer Point de l'exercice précédent
import { Point } from './23_classBasic';

// TODO: Ré-exporter Point pour que les tests puissent l'utiliser
export { Point };

// TODO: Implémenter la classe Rectangle

export class Rectangle {
  private topLeft: Point;
  private width: number;
  private height: number;

  constructor(topLeft: Point, width: number, height: number) {
      this.topLeft = topLeft;
      this.width = width;
      this.height = height;
  }

  getTopLeft(){
    return this.topLeft;
  }

  getWidth(){
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getArea(): any {
    return this.width * this.height;
  }

  getPerimeter(): any {
    return this.width*2 + this.height*2;
  }
}

  const point = new Point();
  console.log(point.moveRight());
  console.log(point.moveRight());
  const rect = new Rectangle(point, 5, 3);
  console.log(rect.getTopLeft().getPosition());  // {x: 2, y: 0}
  console.log(rect.getWidth());                   // 5
  console.log(rect.getHeight());                  // 3
  console.log(rect.getArea());                    // 15
  console.log(rect.getPerimeter());               // 16
