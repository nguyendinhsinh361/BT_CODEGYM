let day = prompt("Nhập vào ngày trong tuần mà bạn muốn biết:");

if(day.toLowerCase() == "chủ nhật") {
    day = 8;
}
// C1

// if(day <= 8 && day >= 2) {
//     if(day == 3 || day == 5 || day == 7) {
//         alert("Hôm nay thứ " + day + " chúng ta học code");
//     }else if(day == 2 || day == 4 || day == 6) {
//         alert("Hôm nay thứ " + day + " chúng ta nghỉ học, vì thế hãy thực hành nào");
//     }else {
//         alert("Hôm nay là chủ nhật rồi hãy cùng thư giãn nào")
//     }
// }else {
//     alert("Vui lòng chọn lại thứ trong tuần từ T2 -> Chủ nhật")
// }

// C2

switch(day) {
    case 2:
    case 4:
    case 6:
        alert("Hôm nay thứ " + day + " chúng ta nghỉ học, vì thế hãy thực hành nào");
        break;
    case 3:
    case 5:
    case 7:
        alert("Hôm nay thứ " + day + " chúng ta học code");
        break
    case 8:
        alert("Hôm nay là chủ nhật rồi hãy cùng thư giãn nào");
        break;
    default:
        alert("Vui lòng chọn lại thứ trong tuần từ T2 -> Chủ nhật");

}
