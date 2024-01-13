/*MỤC TIÊU: ÔN TẬP KIẾN THỨC DOM VÀ CÁC HÀM PHƯƠNG THỨC BUILT- IN XỬ LÝ
MẢNG + STRING

Bài 1 (2 điểm):
Cho code như trong hình sau:*/
var users = [
  { id: 1, name: "Jams Smith", gender: 1 },
  { id: 2, name: "Isla Brown", gender: 2 },
  { id: 3, name: "Amelia Davies", gender: 2 },
  { id: 4, name: "Jacob Evans", gender: 1 },
];
var target = document.querySelector("#target");

/*Sử dựng phương thức mảng, từ mảng users sinh ra các thẻ li như ví dụ ở
dưới:
*/
let html = users.map((item, index) => {
  let gender = item.gender == 1 ? "male" : "female";
  return `<li><a href="">${item.id}-${item.name}-${gender}</a></li>`;
});
target.innerHTML = html.join("");
/*LAB 1: LẬP TRÌNH ECMA

TIN HỌC TRANG 2
Bài 2 (3 điểm): Luyện tập phương thức built-in xử lý mảng
Tạo form như trong hình:

Viết code javascript để thực hiện công việc:
- Điền thông tin vào các field ID, Name
- Lựa chọn gender
- Click vào button “Add”
Yêu cầu sau khi click vào button “Add” thì sẽ cập nhật dữ liệu từ form vào
mảng users sau đó generate danh sách này vào thẻ ul (hiển thị thêm 1 thẻ
li với dữ liệu đã nhập vào form)*/
function bai2() {
  let id = document.querySelector("input[name='id']").value;
  let name = document.querySelector("input[name='name']").value;
  let gender = document.querySelector("select[name='gender']").value;
  target.innerHTML += `<li><a href="">${id}-${name}-${gender}</a></li>`;
}
let btnAdd = document.querySelector(".add");
btnAdd.addEventListener("click", bai2);

/*Bài 3 (2 điểm):
Cho giao diện như hình dưới đây:
Yêu cầu:
- Nhập vào một chuỗi và click nút “Convert”
- Hiển thị chuỗi mới ở bên dưới đã được chuyển sang format
camelCase, bỏ đi khoảng trắng và các ký tự đặc biệt.
Input:
- fpt .,/ poly
- javascript …. /// nang,,, cao
Output:
- fptPoly
- javascriptNangCao*/
function bai3() {
  let string = document.querySelector('input[name="inputStr"').value;
  string = string.replace(/[^\w\s]/g, "");
  string = string.split(" ");
  let [str, ...strs] = string;
  let output = [str];
  strs.forEach((value) => {
    if (value != "") {
      let tmp = value.replace(value[0], value[0].toUpperCase());
      output.push(tmp);
    }
  });
  console.log(output.join(""));
}
let btnConvert = document.querySelector("#btnConvert");
btnConvert.addEventListener("click", bai3);

/*Bài 4 (3 điểm): Bài tập về mảng dữ liệu*/
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

/*Câu 1: Tach ten va ho rieng*/
classRoom.forEach((value, index) => {
  if (index != classRoom.length - 1) {
    let fullName = value.trim().split(" ");
    let [firstName, lastName] = fullName;
    console.log(firstName, lastName);
  } else {
    let fullName = value.split(" ");
    fullName = fullName.slice(-2);
    let [firstName, lastName] = fullName;
    console.log(firstName, lastName);
  }
});
/*Câu 2: Thêm một sv vào một vị trí bất kỳ trong mảng*/
classRoom.splice(2, 0, "Nguyễn Huy Tới");
/*Câu 3: Xoá một sinh viên khỏi mảng*/
classRoom.splice(3, 1);
/*Câu 4: Tìm kiếm theo tên, không chứa dấu*/
function bai4(str) {
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
    return bai4(str).includes(bai4(keyword));
  });
}
console.log(searchName("nguyen"));
