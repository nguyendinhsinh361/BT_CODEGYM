const ON = 1;
const OFF = 0;

function Remote(id, tivi) {
    this.tivi = tivi;
    this.id = id;
    this.remoteChanel = function() {
        if(0 < this.id < 100) {
            tivi.chanel = this.id;
        }
    };

    this.volume = function() {
        switch (this.id) {
            case '+':
                tivi.volume++;
                break;
            case '-':
                tivi.volume--;
                break;
            default:
                break;
        }
    }
}
function Tivi(chanel, volume) {
    this.chanel = chanel;
    this.volume = volume;
    this.status = OFF;

    this.remoteChanel = function() {

    };

    this.volume = function() {

    }
}
function TvShow(id) {
    let remote = new Remote(7)
    let tivi = new Tivi(7, 30)
    tivi.status = ON;

}

