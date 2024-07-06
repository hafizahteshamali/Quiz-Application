let profileData = document.getElementById('profileData');
let userData = JSON.parse(localStorage.getItem("userInformation"));
let showImage = document.getElementById('showImage');

const {name, email, password} = userData;

const showData = ()=>{
    profileData.innerText = name;
    showImage.src = localStorage.getItem("picture");
}
showData();


const logout = ()=>{
    localStorage.clear();
    window.location.href="../signup/signup.html";
}
