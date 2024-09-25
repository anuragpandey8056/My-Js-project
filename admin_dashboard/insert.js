async function insert(e) {
    
    try {
        let myname = document.getElementById("name").value;
        let myemail = document.getElementById("email").value;
        let roll = document.getElementById("rollno").value;
        let dept= document.getElementById("dept").value;

        let mypassword = document.getElementById("password").value;

        if(myname== " " || myemail ==""||mypassword ==""){
            alert("all fields are complusary to fill")
            document.getElementById("name").focus()
            }
       
        else{
            let url = ("http://localhost:3000/registration");

            let response = await fetch(url, {
                method :"POST",
                body: JSON.stringify({
                    name: myname,
                    Email: myemail,
                    rollno:roll,
                    department:dept,
                    password: mypassword,
    
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

