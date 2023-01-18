

class Point {

    constructor(x,y) {
        this.x = x
        this.y = y
    }
    static distance(p1, p2) {

        let x1 = p1.x - p2.x
        let y1 = p1.y - p2.y
        return Math.sqrt(x1 ** 2 + y1 ** 2);
    }
}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
