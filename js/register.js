let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let lower_case_letter = /[a-z]/g;
    let upper_case_letter = /[A-Z]/g;
    let number = /[0-9]/g;

    if (username.length < 6) {
        alert("tên cần có ít nhất 6 kí tự");
    }
    else if (password.length < 8) {
        alert("mật khẩu phải có ít nhất 8 kí tự");
    }
    else if (!password.match(lower_case_letter)) {
        alert("mk cần có chữ cái");
    }
    else if (!password.match(upper_case_letter)) {
        alert("mk cần có chữ in hoa");
    }
    else if (!password.match(number)) {
        alert("mk cần có số");
    }
    else {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users") || "[]");

            users.push({
                email,
                password,
                username
            });
            localStorage.setItem("users", JSON.stringify(users));
        }
        else {
            localStorage.setItem("users", JSON.stringify([
                {
                    email,
                    password,
                    username
                },
            ]));
        }
        alert("tạo tk thành công, vui lòng đăng nhập");  
        location.href = "../login.html";
    }
})

