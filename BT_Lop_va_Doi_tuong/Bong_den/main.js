class ElectricLamp {
    constructor(status) {
        this.status = status;
    };
    turnOff() {
        let image = document.getElementById('myImage');
        image.src = "pic_bulboff.gif";
    };
    turnOn() {
        let image = document.getElementById('myImage');
        image.src = "pic_bulbon.gif";
    }
}

class SwitchButton {
    
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    };
    connectToLamp(lamp) {
        if(lamp) {
            let imgLamp = document.querySelector('img');
            imgLamp.id = 'myImage';
        }
    };
    breakToLamp(lamp) {
        if(lamp) {
            let imgLamp = document.querySelector('img');
            imgLamp.id = '';
        }
    };
    lightLamp() {
        if(this.status) {
            this.lamp.turnOn();
        }else {
            this.lamp.turnOff();
        }
    };
    switchOff() {
        this.status = false;
        return this.status;
    };
    switchOn() {
        this.status = true;
        return this.status;
    }
}

let electricLamp = new ElectricLamp(true);
let switchButton = new SwitchButton(false, electricLamp);

function onLamp() {
    switchButton.switchOn();
    switchButton.lightLamp();
}

function offLamp() {
    switchButton.switchOff();
    switchButton.lightLamp();
}

function breakSwitch() {
    switchButton.breakToLamp(electricLamp);
}

function connectSwitch() {
    switchButton.connectToLamp(electricLamp);
}


