function foo() {
    return "foo";
}
class Point {
    constructor(public x, public y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
export {
    foo,
    Point
};