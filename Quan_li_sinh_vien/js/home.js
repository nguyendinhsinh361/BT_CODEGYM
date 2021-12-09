// Khai báo một biến toàn cục có nhiệm vụ kiểm tra chỉ số dòng cần update;
let count_update = 0;

let students = [
	{
		LuaChon: '<input type="checkbox" id="txtLuaChon" name="selectMore"/>',
		MaSV: "AT17G",
		HoTen: "Nguyễn Đình Sinh",
		Tuoi: 19,
		NgaySinh: "03/07/2002",
		GioiTinh: "Nam",
		DiaChi: "Nam Hải, Nam Trực, Nam Định",
	},
];
//khai báo hàm genStudentTable: mục đích để vẽ ra các thẻ HTML để hiển thị bên trong thẻ tbody có ID=studentTbody
let genStudentTable = function () {
	//đoạn lệnh này xóa toàn bộ các thẻ con bên trong thẻ tbody có id là studentTbody
	const myNode = document.getElementById("studentTbody");
	myNode.innerHTML = "";

	//shorthand: đoạn này kiểm tra nếu mảng students != null && student != undefined
	if (students) {
		//dùng thể lưu html của các row trong table Student
		let rowItems = "";

		//vòng lặp
		for (let i = 0; i < students.length; i++) {
			let student = students[i]; // lấy ra student cụ thể trong mảng students
			let rowItem = `<tr>
				<td>${student.LuaChon}</td>
				<td>${student.MaSV}</td>
				<td>${student.HoTen}</td>
				<td>${student.Tuoi}</td>
				<td>${student.NgaySinh}</td>
				<td>${student.GioiTinh}</td>
				<td>${student.DiaChi}</td>
				<td class="del_edit">
				  	<input class="delete" type='button' value='Xóa' onclick='xoaHocSinh("${student.MaSV}");' />
				  	<input class="edit" type='button' value='Sửa' onclick='suaHocSinh("${student.MaSV}");' />
				</td>
				</tr>`;
			//thêm 1 row vào trong rowItems: nó chính là cách viết: rowItems = rowItems + rowItem
			rowItems += rowItem;
		}

		myNode.innerHTML = rowItems;
	}
};

//goi ham để gen ra màn hình các thông tin của sinh viên
genStudentTable();

let LuuSinhVien = function () {
	//đoạn này lấy giá trị trong form thêm mới học sinh

	// Tạo một biến gián tiếp để lấy ra giá trị thẻ input của biến lựa chọn
	// rồi ghi lại thuộc tính type = "checkbox" để hiện thẻ input
	let luaChon_1 = document.getElementById("txtLuaChon").innerHTML;
	luaChon_1 = '<input type="checkbox" id="txtLuaChon" name="selectMore"/>' ;
	let luaChon = luaChon_1;

	let maSV = document.getElementById("txtMaSV").value;
	let hoTen = document.getElementById("txtHoTen").value;
	let tuoi = document.getElementById("txtTuoi").value;

	let ngaysinh = document.getElementById("txtDate").value;
	// Ở đây sau khi lấy được giá trị ngày nhập vào ta tách chuối thành các phần tử nhỏ bằng hàm split()
	// rồi đảo ngược thứ tự bằng hàm reverse() rồi chuyển vào hàm mới bằng join();
	ngaysinh = ngaysinh.split('-').reverse().join('-');
	// Sau đó ta thay thế kí tự '-' mặc định thành '/' bằng hàm replace() hoặc replaceAll();
	ngaysinh = ngaysinh.replace(/-/g, "/");

	// Khai báo một biến gioitinh trống;
	let gioitinh = "";
	// Khai báo biến check có giá trị là true hoặc false tùy vào giá trị mà người dùng chọn
	let check = document.getElementById("male").checked;
	if(check) {
		gioitinh = "Nam";
	}else {
		gioitinh = "Nữ";
	}

	let diachi = document.getElementById("txtDiaChi").value;

	//kiểm tra dữu liêu hợp lệ
	let isSinhVienHopLe = kiemTraDuLieuSinhVien(
		maSV,
		hoTen,
		tuoi,
		ngaysinh,
		gioitinh
	);
	if (isSinhVienHopLe) {
		let student = {
			LuaChon: luaChon,
			MaSV: maSV,
			HoTen: hoTen,
			Tuoi: tuoi,
			NgaySinh: ngaysinh,
			GioiTinh: gioitinh,
			DiaChi: diachi,
		};

		students.push(student);

		genStudentTable();

		//sau khi luu du lieu xong, clear form
		document.getElementById("newStudentForm").reset();
	}
};

//ham nay de kiem tra du lieu sinh vien hop le hay khong, neu hop le tra ve true, sai thi tra ve false
let kiemTraDuLieuSinhVien = function (maSV, hoTen, tuoi, ngaysinh, gioitinh) {
	let valid = false;

	if (maSV) {
		if (hoTen) {
			if (tuoi) {
				if(ngaysinh) {
					if (gioitinh) {
						valid = true;
					} else {
						alert("Giới tính không được để trống.");
					}
				}else {
					alert("Ngày sinh không được để trống.");
				}
			} else {
				alert("Tuổi không được để trống.");
			}
		} else {
			alert("Họ tên không được để trống.");
		}
	} else {
		alert("Mã SV không được để trống.");
	}

	return valid;
};

//hàm xóa sinh viên, truyền vào mã SV,
let xoaHocSinh = function (maSV) {

	//hàm confirm: bật lên thông báo xác nhận
	if(confirm(`Bạn có muốn xóa học sinh ${maSV} không?`)) {

		for (var i = 0; i < students.length; i++) {
			let student = students[i]; // lấy ra student cụ thể trong mảng students

			//nếu mã sinh viên truyền vào, trùng với mã sinh viên trong mảng students, thì sẽ xóa sinh viên đó
			if(student.MaSV.toUpperCase() == maSV.toUpperCase()) {
				students.splice(i,1);
			}
		}
		genStudentTable();
	}
}


function suaHocSinh(maSV) {

	//hàm confirm: bật lên thông báo xác nhận
	if(confirm(`Bạn có sửa học sinh ${maSV} không?`)) {
		for (var i = 0; i < students.length; i++) {
			let student = students[i]; // lấy ra student cụ thể trong mảng students

			//nếu mã sinh viên truyền vào, trùng với mã sinh viên trong mảng students, thì sẽ xóa sinh viên đó
			if(student.MaSV.toUpperCase() == maSV.toUpperCase()) {
				document.getElementById("txtMaSV").value = student.MaSV;
				document.getElementById("txtHoTen").value = student.HoTen;
				document.getElementById("txtTuoi").value = student.Tuoi;
				document.getElementById("txtDate").value = student.NgaySinh;
				document.getElementById("txtDiaChi").value = student.DiaChi;
				
				// Ban đầu nút Lưu hiện còn nút Update ta ẩn đi
				// Sau khi nhấn nút Sửa ta sẽ cho nút Lưu ẩn còn nút Update hiện ra
				document.getElementById("btnUpdate").type = "button";
				document.getElementById("btnSave").type = "hidden";

				count_update = i;
			}
		}
		genStudentTable();
	}
}



function UpdateSinhVien() {
	let luaChon_1 = document.getElementById("txtLuaChon").innerHTML;
	luaChon_1 = '<input type="checkbox" id="txtLuaChon" name="selectMore"/>' ;
	let luaChon = luaChon_1;
	let maSV = document.getElementById("txtMaSV").value;
	let hoTen = document.getElementById("txtHoTen").value;
	let tuoi = document.getElementById("txtTuoi").value;
	let ngaysinh = document.getElementById("txtDate").value;
	ngaysinh = ngaysinh.split('-').reverse().join('-');
	ngaysinh = ngaysinh.replace(/-/g, "/");

	let gioitinh = "";
	let check = document.getElementById("male").checked;
	if(check) {
		gioitinh = "Nam";
	}else {
		gioitinh = "Nữ";
	}
	let diachi = document.getElementById("txtDiaChi").value;

	//kiểm tra dữu liêu hợp lệ
	let isSinhVienHopLe = kiemTraDuLieuSinhVien(
		maSV,
		hoTen,
		tuoi,
		ngaysinh,
		gioitinh
	);
	if (isSinhVienHopLe) {
		let student = {
			LuaChon: luaChon,
			MaSV: maSV,
			HoTen: hoTen,
			Tuoi: tuoi,
			NgaySinh: ngaysinh,
			GioiTinh: gioitinh,
			DiaChi: diachi,
		};

		for (var i = 0; i < students.length; i++) {
			if(count_update == i) {
				students.splice(i, 1, student);
				break;
			}
		}

		genStudentTable();

		//sau khi luu du lieu xong, clear form
		document.getElementById("newStudentForm").reset();

		// Nút Update giờ đang hiện vì ta bắt sự kiện nút sửa còn nút Lưu bị ẩn đi
		// Sau khi nhấn nút Update ta sẽ cho nút Lưu hiện ra còn nút Update lại ẩn đi
		document.getElementById("btnSave").type = "button";
		document.getElementById("btnUpdate").type = "hidden";
	}
}


// Chưa hoàn thiện :))
// Ý tưởng : tạo ra một thuộc tính ở thẻ input có giá trị là MaSV
// Kiểm tra xem thẻ inout được check hay không
// Sau đó check students[i].LuaChon.checked nếu có thì sẽ viết lại thẻ input có thuộc tính mới bằng MaSV rồi lưu vào một mảng


// luaChon_1 = '<input type="checkbox" id="txtLuaChon" name="selectMore" maSVIndex="${maSV}"/>'
// kiểm tra vòng lặp với điều kiện 
// if(document.getElementsByTagName("selectMore")[i].checked) {
// 	if(document.getElementsByTagName("selectMore")[i] == student.MaSV.toUpperCase())
// }
function deleteAllSV() {
	if(confirm(`Bạn có muốn xóa các học sinh đã chọn không?`)) {
		let lengthStd = students.length;
		let checkIndex = false;
		for (var i = 0; i < lengthStd; i++) {
			checkIndex = document.getElementsByName("selectMore")[i].checked;
			if(checkIndex) {
				students.splice(i, 1);
			}
		}
		genStudentTable();
	}
}

