function draw_1() {
    let draw = document.getElementById('draw_1');
    for(let i = 0  ; i < 4 ; i++) {
        for(let j = 0 ; j <= i ; j ++) {
            draw.innerHTML += " * ";
        }
        draw.innerHTML += "<br>";
    }
}

function draw_2() {
    let draw = document.getElementById('draw_2');
    for(let i = 3  ; i >= 0 ; i--) {
        for(let j = 0 ; j <= i ; j ++) {
            draw.innerHTML += " * ";
        }
        draw.innerHTML += "<br>";
    }
}

function draw_3() {
    let draw = document.getElementById('draw_3');
    for(let i = 0  ; i < 4 ; i++) {
        for(let j = 3 ; j >= 0 ; j--) {
            if(i < j) {
                draw.innerHTML += ` &nbsp;&nbsp; `;
            }else {
                draw.innerHTML += ` * `;
            }
        }
        draw.innerHTML += "<br>";
    }
}

function draw_4() {
    let draw = document.getElementById('draw_4');
    for(let i = 3 ; i >= 0 ; i--) {
        for(let j = 3 ; j >= 0 ; j--) {
            if(i >= j) {
                draw.innerHTML += ` * `;
            }else {
                draw.innerHTML += ` &nbsp;&nbsp; `;
            }
        }
        draw.innerHTML += "<br>";
    }
}
