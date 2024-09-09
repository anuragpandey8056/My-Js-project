function run1(){
    
    let email = document.getElementById("email").value ;
    let pass = document.getElementById("password").value ;

    // let  localemail = localStorage.getItem("email")
    // let  localpass = localStorage.getItem("cnfrmpass");

    let data = window.localStorage.getItem("data");

    let converteddata = JSON.parse(data);

    if(email == converteddata.email && pass ==converteddata.cpass){
        alert("login succesfully Welcome ")
        window.open("../admin_dashboard/admin.html")
    }
    else{
        alert("wrong pass")
    }


}