class Rat{
    constructor (name, weigh, speed) {
        this.name = name;
        this.weigh = weigh;
        this.speed = speed;
    }
    sound() {
        if(this.status) {
            console.log("Chít Chít");
        }
        return true;
    }
    alive() {
        this.status = true;
    }
    die() {
        this.status = false;
    }
}

class Cat{
    constructor (name, weigh, maxSpeed) {
        this.name = name;
        this.weigh = weigh;
        this.maxSpeed = maxSpeed;
    }
    sound() {
        if(this.status) {
            console.log("Meo Meo");
        }
    }
    catchRat(rat) {
        if(this.status) {
            if(rat.status && rat.sound()) {
                console.log("Mèo đã nghe thấy chuột, chuẩn bị bắt!!!")
                if(this.maxSpeed > rat.speed) {
                    console.log("Đã bắt được chuột");
                    return true;
                }else {
                    console.log("Mèo không bắt được chuột!!!");
                    return false;
                }
            }
        }
    }
    eatRat(rat) {
        if(this.catchRat(rat)) {
            console.log("Ăn được chuột");
            this.weigh = this.weigh + rat.weigh;
            console.log(`Khối lượng của mèo sau khi ăn chuột: ${this.weigh}`);
        }
    }
    alive() {
        this.status = true;
    }
    die() {
        this.status = false;
    }
}
let rat = new Rat('Chuot', 1, 3);
rat.alive();
rat.sound();


let cat = new Cat('Meo', 3, 5);
cat.alive();
cat.sound();
cat.eatRat(rat);