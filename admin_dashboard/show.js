function editRow(id) {
    document.getElementById(`id-${id}`).removeAttribute('readonly');
    document.getElementById(`nm-${id}`).removeAttribute('readonly');
    document.getElementById(`email-${id}`).removeAttribute('readonly');
    document.getElementById(`password-${id}`).removeAttribute('readonly');

    document.getElementById(`edit-${id}`).style.display = "inline";
    document.getElementById(`save-${id}`).style.display = "inline";
}

function saveRow(id){
    let myid = document.getElementById(`id-${id}`).value;
    let myname = document.getElementById(`nm-${id}`).value;
    let myemail = document.getElementById(`email-${id}`).value;
    let mypassword = document.getElementById(`password-${id}`).value;
  
    let url = `http://localhost:3000/registration/${id}`;
    fetch(url,{
      method:"PUT",
      body:JSON.stringify({
        id:myid,
        name:myname,
        email:myemail,
        password:mypassword
      }),
      headers:{
        "Content-type":"application/json;charset=utf-8",
      }
  
    })
    .then((response)=>{
      console.log(response.ok)
      if(response.ok){
        alert("data updated succedfully")
        // dataShow();
      }else{
        throw new Error("error while updating")
      }
    })
    .catch((error)=>{
      console.log(error);
    })
  }














function myrecordRemove(id) {
    let url = `http://localhost:3000/registration/${id}`;

    fetch(url, {
        method: "DELETE",
    })
//     .then((response)=>{
//         if(response.ok){
//         alert("record deleted");
//         show();
//         }
//          else{
//    throw new Error('eror')
// }})
   
//     .then((data) => {
//       console.log(data);
//       return data.json();
//     })
//     .then((y) => {
//       console.log(y);
//       alert("Record deleted successfully");
//       show()
//     });
}



















async function show() {
    let My_table = `<table border = 1px width = "600px" align = "center">
        <tr style="background-color: rgb(66, 126, 154); color: white;">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>save</th>
        

        </tr>`;

    let Url = "http://localhost:3000/registration";
    let myobj = await fetch(Url);
    let mydata = await myobj.json();

    mydata.map((key) => {
        My_table += `<tr>
            <td id="id-${key.id}"> ${key.id}  </td>
            <td id="nm-${key.id}"> ${key.name} </td>
            <td  id="email-${key.id}">${key.Email} </td>
            <td id="password-${key.id}">${key.password}  </td>
            <td id="edit-${key.id}"><i   onclick="editRow('${key.id}')" class="fa-regular fa-pen-to-square"></i> </td>
            <td><i  onclick="myrecordRemove('${key.id}')" class="fa-solid fa-delete-left"></i> </td>
            <td id="save-${key.id}"><i  onclick="saveRow('${key.id}')"  class="fa-solid fa-floppy-disk"></i> </td>

        </tr>`;
    });

    My_table += `</table>`;
    let one = document.getElementById("show");
    let two = document.getElementById("show1");

    one.innerHTML = My_table;
    two.innerHTML = My_table;

}

// show()
