var username = "";
function login() {
    if(document.getElementById("mnop").value == ""){
        alert("Please enter a name in order to access the app");
    }
    else{
        username = document.getElementById("mnop").value;
        localStorage.setItem("xyz", username);
        document.getElementById("mnop").value = "";
        console.log(username);
        window.location = "klmn.html";
    }
}
