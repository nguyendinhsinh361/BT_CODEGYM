let text = 'BẠN LÀ MỘT ĐỨA NGỐC !!!';
let strText = text.split('');
let result = '';


function typeTextarea() {
    let key = document.getElementById("textValue").value;
    let keyLength = key.length;
    if(keyLength > 0) {
        for(let i = 0 ; i < keyLength ; i++) {
            console.log(key)
            result += strText[i];
            if( i == strText.length) {
                document.getElementById("textValue").value = '';
                result = ""; 
            }
        }
    }
    document.getElementById("textValue").value = result;
    result = ""; 
    setTimeout('typeTextarea()', 1000);
}



