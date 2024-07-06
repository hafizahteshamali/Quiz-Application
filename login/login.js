let userloginEmail = document.getElementById('userloginEmail');
let userloginPassword = document.getElementById('userloginPassword');
let loginerror = document.getElementById('loginerror');


const loginform = () => {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userInformation"));
    const { name, email, password } = userData;

    if (userloginEmail.value.trim() === "" || userloginPassword.value.trim() === "") {
        swal("Error (X)", "Fill all Input Fields");
    } else if ((userloginEmail.value === email) && (userloginPassword.value === password)) {
        window.location.href = "../dashboard/dashboard.html";
    } else {
        loginerror.innerText = "Invalid Email or Password";
        setTimeout(() => {
            loginerror.innerText = "";
        }, 1000);
    }
}
