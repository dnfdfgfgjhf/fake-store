
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!localStorage.getItem("users")){
        alert("No user found");
    }
    else {

        let users = JSON.parse(localStorage.getItem("users"));

        let email = document.getElementById("email");
        let password = document.getElementById("password");


        let existing_user = users.find(
            (index) => 
                index.email === email.value.trim() &&
                index.password === password.value.trim()
        );

        if (existing_user) {
            localStorage.setItem("current_user", JSON.stringify(existing_user));
            location.href = "../index.html";
        }
        else {
            alert("Email or password is incorrect");
        }
    }
});