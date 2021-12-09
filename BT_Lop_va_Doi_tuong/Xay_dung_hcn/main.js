

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        let S = this.height*this.width;
        return S;
    }
    getPerimeter() {
        let P = this.height*2 + 2*this.width;
        return P;
    }
    drawRec() {
        const cvs = document.getElementById("rectangle");
        const ctx = cvs.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(0,0, this.width, this.height);
    }
}

let rec1 = new Rectangle(200, 80);
rec1.drawRec();