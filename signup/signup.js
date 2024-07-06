let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let userPassword = document.getElementById('userPassword');
let error = document.getElementById('error');
let emailRegix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegix = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let image = document.getElementById('image');



const signupForm = ()=>{
    event.preventDefault();
    let userInfo ={
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    }
    if(userName.value.trim() === "" || userEmail.value.trim() === "" || userPassword.value.trim() === ""){
        swal("Error (X)", "Fill all Input Fields");
    }
    else if((emailRegix.test(userEmail.value)) && (passwordRegix.test(userPassword.value))){
        localStorage.setItem("userInformation",JSON.stringify(userInfo));
        window.location.href="../login/login.html";
    }
    else{
        error.innerText = "Invalid Credentials TRY AGAIN!";
        setTimeout(()=>{
            error.innerText ="";
        }, 1000);
    }

    let img = image.files[0];
    if(img){
        let fileRead = new FileReader();
        fileRead.onload = () =>{
            localStorage.setItem("picture", fileRead.result);
        }
        fileRead.readAsDataURL(img);
    }

}

