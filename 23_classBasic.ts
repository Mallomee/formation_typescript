/**
 * Exercice 23: Classes - Bases
 *
 * Créer une classe `Point` avec :
 * - Une propriété privée `x` initialisée à 0
 * - Une propriété privée `y` initialisée à 0
 * - Une méthode `getPosition()` qui retourne un objet {x, y}
 * - Une méthode `moveRight()` qui incrémente `x` de 1
 * - Une méthode `moveLeft()` qui décrémente `x` de 1
 * - Une méthode `moveUp()` qui incrémente `y` de 1
 * - Une méthode `moveDown()` qui décrémente `y` de 1
 * - Une méthode `reset()` qui remet x et y à 0
 * - Une méthode `move(dx, dy)` qui déplace le point de dx et dy
 */

// TODO: Implémenter la classe Point

export class Point {
    private x: number = 0;
    private y: number = 0;

    getPosition(){
        return {x: this.x, y: this.y};
    }

    moveRight(){
        return this.x+1
    }
    moveLeft(){
        return this.x-1
    }
    moveUp(){
        return this.y+1
    }
    moveDown(){
        return this.y-1
    }
    reset(){
        this.x = 0;
        this.y = 0;
    }
    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }

}

/*
const point = new Point();
point.getPosition();   // {x: 0, y: 0}
point.moveRight();
point.getPosition();   // {x: 1, y: 0}
point.moveUp();
point.getPosition();   // {x: 1, y: 1}
point.reset();
point.getPosition();   // {x: 0, y: 0}
point.move(5, 3);
point.getPosition();   // {x: 5, y: 3}
*/