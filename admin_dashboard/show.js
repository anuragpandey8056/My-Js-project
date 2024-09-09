function editRow(id) {
    document.getElementById(`id-${id}`).removeAttribute('readonly');
    document.getElementById(`nm-${id}`).removeAttribute('readonly');
    document.getElementById(`email-${id}`).removeAttribute('readonly');
    document.getElementById(`password-${id}`).removeAttribute('readonly');

    document.getElementById(`edit-${id}`).style.display = "inline";
    document.getElementById(`save-${id}`).style.display = "inline";
}
















function myrecordRemove(id) {
    let url = `http://localhost:3000/registration/${id}`;

    fetch(url, {
        method: "DELETE",
    });
    alert("record deleted");
    // .then((data) => {
    //   console.log(data);
    //   return data.json();
    // })
    // .then((y) => {
    //   console.log(y);
    //   alert("Record deleted successfully");
    // });
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
