
async function show() {
    let My_table = `<table border = 1px width = "600px" align = "center">
        <tr style="background-color: rgb(66, 126, 154); color: white;">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roll-No</th>
            <th>Department</th>
            <th>password</th>
            
        

        </tr>`

    let Url = "http://localhost:3000/registration";
    let myobj = await fetch(Url);
    let mydata = await myobj.json();

    mydata.map((key) => {
        My_table += `<tr>
            <td id="id-${key.id}"> ${key.id}  </td>
            <td id="nm-${key.id}"> ${key.name} </td>
            <td  id="email-${key.id}">${key.Email} </td>
            <td  id="rollno-${key.id}">${key.rollno} </td>
            <td  id="dept-${key.id}">${key.department} </td>

            <td id="password-${key.id}">${key.password}  </td>
           

        </tr>`





    });

    My_table += `</table>`
    let two = document.getElementById("show3");

    two.innerHTML = My_table;

}

show()