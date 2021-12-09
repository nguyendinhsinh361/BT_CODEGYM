function start() {
    let showResult = "";
    for(let i = 1 ; i <= 10 ; i++) {
        let showRow = `<tr>`;
        for(let j = 1 ; j <= 10; j++) {
            let result = i*j;
            showRow += `<td> ${i} x ${j} = ${result} </td>`;
        }
        showRow += `</tr>`;
        showResult += showRow;
    }
    document.getElementById("bangCuuChuong").innerHTML = showResult;
}
