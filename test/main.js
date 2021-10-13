let x = prompt("Nhập vào giá trị của x của bạn");
let y = prompt("Nhập vào giá trị của y của bạn");

if(!isNaN(x) && !isNaN(y)) {
    x  = Number(x);
    y  = Number(y);
    let sum = x + y;
    alert("Tổng 2 số là " + sum);
}else {
    alert("Xin lỗi vui lòng nhập lại!")
}

