const products = [
  {name:"Laptop"},
  {name:"iPhone"},
  {name:"Samsung"},
  {name:"Tai nghe"},
  {name:"Chuột"}
];

function render(list){
  const el = document.getElementById("list");
  if(!el) return;

  el.innerHTML="";
  list.forEach(p=>{
    const div=document.createElement("div");
    div.className="product";
    div.textContent=p.name;
    el.appendChild(div);
  });
}

function searchProduct(){
  const key=document.getElementById("search").value
    .toLowerCase()
    .trim();

  const result=products.filter(p =>
    p.name.toLowerCase().includes(key)
  );

  const error=document.getElementById("error");

  if(result.length===0){
    error.textContent="Không tìm thấy sản phẩm";
  } else {
    error.textContent="";
  }

  render(result);
}

// chạy lần đầu
if(document.getElementById("list")){
  render(products);
}
function handleSubmit(e){
  e.preventDefault();

  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const pass=document.getElementById("password").value;
  const agree=document.getElementById("agree").checked;

  const emailRegex=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const passRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$/;

  if(!name) return alert("Nhập tên");
  if(!emailRegex.test(email)) return alert("Email sai");
  if(!passRegex.test(pass)) return alert("Mật khẩu yếu");
  if(!agree) return alert("Phải đồng ý điều khoản");

  localStorage.setItem("user", JSON.stringify({name,email}));

  document.getElementById("msg").textContent="Đăng ký thành công!";
}
// ===== BÀI 3 =====
let time = 600; // 10 phút = 600 giây

if (document.getElementById("timer")) {

  const timer = setInterval(() => {

    let m = Math.floor(time / 60);
    let s = time % 60;

    document.getElementById("timer").textContent =
      m + ":" + (s < 10 ? "0" : "") + s;

    // Khi còn dưới 1 phút → đổi màu đỏ
    if (time <= 60) {
      document.getElementById("timer").style.color = "red";
    }

    time--;

    if (time < 0) {
      clearInterval(timer);
      alert("Hết giờ!");
    }

  }, 1000);

}