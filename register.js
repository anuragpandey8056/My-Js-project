function run(e){
    // e.preventDefault();

    let name = document.getElementById("name").value;
    // let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let cnfrmpass = document.getElementById("cnfpass").value;

    if(name === ""||email===" "||pass === " "||cnfrmpass ===" "){
        alert("All field are mandatory")
        return;
    }
    if(pass!==cnfrmpass){
        alert("pass and cnfrmpass doesn not matched")
        return;
    };

    let obj = {
        "name":name,
        "email":email,
        "pass":pass,
        "cpass":cnfrmpass
    }

    // localStorage.setItem("name" , name)
    // localStorage.setItem("lastname" , lname)
    // localStorage.setItem("email" ,  email)
    // localStorage.setItem("cnfrmpass" , cnfrmpass)

    window.localStorage.setItem("data",JSON.stringify(obj))

    


    window.location.href = "Accont.html"

} 