let genTel = function (tels) {
	const myNode = document.getElementById("telTbody");
	myNode.innerHTML = "";
	if (tels) {
		let rowItems = "";
		for (let i = 0; i < tels.length; i++) {
			let tel = tels[i];
			let rowItem = `<tr>
				<td id="name">${tel.Name}</td>
				<td id="core">${tel.Core}</td>
				<td>
                    <button class="buttonService" id="edit" onclick="editProduct(${i})">Edit</button>
                    <button class="buttonService" id="delete" onclick="deleteProduct(${i})">Delete</button>
                </td>
				</tr>`;
			rowItems += rowItem;
		}

		myNode.innerHTML = rowItems;
	}
};

const service = (function() {
    {
        let tels = [
            {
                Name: 'Iphone',
                Core: 2000,
                Ser: ['Edit', 'Delete'],
            }
        ]
        return {
            gen() {
                genTel(tels)
            },
            get(index) {
                return tels[index]
            },
            add(tel) {
                tels.push(tel)
                genTel(tels)
            },
            edit(index, tel) {
                tels[index] = tel
                genTel(tels)
            },
            delete(index) {
                tels.splice(index, 1)
                genTel(tels)
            }
        }
    }
})()

service.gen();

function getData() {
    let name = document.getElementById("name").value;
    let core = document.getElementById("core").value;
    let ser = ['Edit', 'Delete'];
    let tel = {
        Name: name,
        Core: core,
        Ser: ser,   
    }
    return tel;
}

let id = 0;

function editProduct(index) {
    let data = service.get(index);
    document.getElementById("name").value = data.Name;
    document.getElementById("core").value = data.Core;
    id = index;
    document.getElementById("add").style.display = "none";
    document.getElementById("update").style.display = "initial";
    console.log(id)
}

function updateProduct() {
    console.log(id)
    let data = getData();
    service.edit(id, data);
    document.getElementById("add").style.display = "initial";
    document.getElementById("update").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("core").value = "";
}

function addProduct() {
    let data = getData();
    service.add(data);
    document.getElementById("name").value = "";
    document.getElementById("core").value = "";
}

function deleteProduct(index) {
    service.delete(index);
}



function searchProduct() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        }else {
            tr[i].style.display = "none";
            }
        }       
    }
}

  