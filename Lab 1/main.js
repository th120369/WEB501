/*MỤC TIÊU: ÔN TẬP KIẾN THỨC DOM VÀ CÁC HÀM PHƯƠNG THỨC BUILT- IN XỬ LÝ
MẢNG + STRING*/

// Bài 1 (2 điểm):
var users = [
  { id: 1, name: "Jams Smith", gender: 1 },
  { id: 2, name: "Isla Brown", gender: 2 },
  { id: 3, name: "Amelia Davies", gender: 2 },
  { id: 4, name: "Jacob Evans", gender: 1 },
];
var target = document.querySelector("#target");

let html = users.map((item, index) => {
  let gender = item.gender == 1 ? "male" : "female";
  return `<li>${item.id}-${item.name}-${gender}</li>`;
});
target.innerHTML = html.join("");


// Bài 2 (3 điểm): 
function bai2() {
  let id = document.querySelector("input[name='id']").value;
  let name = document.querySelector("input[name='name']").value;
  let gender = document.querySelector("select[name='gender']").value;
  target.innerHTML += `<li>${id}-${name}-${gender}</li>`;
}
let btnAdd = document.querySelector(".add");
btnAdd.addEventListener("click", bai2);

// Bài 3 (2 điểm):
// Hàm chuyển đổi chuỗi sang camelCase
function toCamelCase(str) {
    str = str.replace(/[^a-zA-Z ]/g, "");
    str = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    });
    str = str.replace(/\s+/g, "");
    return str;
  }
  //
  var inputStr = document.querySelector("input[name=inputStr]");
  var btnConvert = document.getElementById("btnConvert");
  var output = document.getElementById("output");
  
  //
  btnConvert.addEventListener("click", function () {
    var str = inputStr.value;
    var result = toCamelCase(str);
    output.textContent = result;
  });

// Bài 4 (3 điểm): Bài tập về mảng dữ liệu
let classRoom = [
  "nguyễn tiến duẩn",
  "Hoàng Xuân Hiếu",
  "Hồ Sỹ Hưng",
  " Nguyễn Đức Thuận",
  "đoàn Minh Tùng",
  "Hồ Sỹ Hùng",
  " Lê Trung Hiếu",
  "đoàn vua dep trai vua hoc gioi Hữu Quý",
];

// Câu 1: Tach ten va ho rieng

let output2 = "";
output2 += "<hr> Câu 1<hr>";
for (let name of classRoom) {
    let parts = name.trim().split(" ");
    let lastName = parts[0].charAt(0).toUpperCase() +parts[0].slice(1);
    let firstName = parts[parts.length - 1].charAt(0).toUpperCase() +parts[parts.length - 1].slice(1);
    output2 += `Họ: ${lastName}, Tên: ${firstName}<br>`;
    console.log(`Họ: ${lastName}, Tên: ${firstName}`);
  }


// Câu 2: Thêm một sv vào một vị trí bất kỳ trong mảng
output2 += "<hr> Câu 2<hr>";
output2 += JSON.stringify(classRoom) + "<br>"; // Thêm kết quả vào biến output, kèm theo thẻ <br> để xuống dòng
classRoom.splice(2, 0, "Nguyễn Tiến Hoàng");
console.log(classRoom);
// Câu 3: Xoá một sinh viên khỏi mảng
output2 += "<hr> Câu 3<hr>";
let index = classRoom.indexOf("Nguyễn Tiến Hoàng");
if (index > -1) {
  classRoom.splice(index, 1);
}
//
classRoom.splice(3, 1);
//
output2 += JSON.stringify(classRoom) + "<br>"; //
console.log(classRoom);
// Câu 4: Tìm kiếm theo tên, không chứa dấu\
output2 += "<hr> Câu 4<hr>";
function cau4(str) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}
function searchName(keyword) {
  return classRoom.filter((str) => {
    return cau4(str).includes(cau4(keyword));
  });
}
output2 += JSON.stringify(searchName("hoang")) + "<br>"; // 

// 
document.getElementById("output2").innerHTML = output2;
console.log(searchName("hoang"));

