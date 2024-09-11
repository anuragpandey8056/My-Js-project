async function insert(e) {
        // e.preventDefault();
    try {
        let myname = document.getElementById("name").value;
        let myemail = document.getElementById("email").value;
        let mypassword = document.getElementById("password").value;

        if(myname== " " || myemail ==""||mypassword ==""){
            alert("all fields are complusary to fill")
            document.getElementById("name").focus()
            }
        // else if (!email.match(/@/)){
        //     window.alert("plaase fill @ your email");
        //     document.querySelector("#email").focus();
    
        // }
    
        // else if (!(email.includes("@gmail.com") || email.includes("@yahoo.com"))){
        //     window.alert("plaase fill @gmail email");
        //     document.querySelector("#email").focus();
            
        // }
        else{
            let url = ("http://localhost:3000/registration");

            let response = await fetch(url, {
                method :"POST",
                body: JSON.stringify({
                    name: myname,
                    Email: myemail,
                    password: mypassword
    
                }),
                headers:{
                     "Content-type": "application/json; charset=UTF-8"
                }
            });
            console.log(response);
            let dat = await response.json();
            console.log(dat);
            alert("data successfully addes")
        }

        
    }
    catch(error){
        console.log("error",error)
        alert("error while adding")
    }
    
    
}