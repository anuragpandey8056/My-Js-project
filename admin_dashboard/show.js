async function show() {
  let My_table = `<table border="1px" width="600px" align="center">
      <tr style="background-color: rgb(66, 126, 154); color: white;">
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>rollno</th>
          <th>department</th>
          <th>Password</th>

          <th>Edit</th>
          <th>Delete/save</th>
          
      </tr>`;

  let Url = "http://localhost:3000/registration";
  let myobj = await fetch(Url);
  let mydata = await myobj.json();

  mydata.forEach((key) => {
      My_table += `<tr>
          <td><input id="id-${key.id}" value="${key.id}" readonly></td>
          <td><input id="nm-${key.id}" value="${key.name}" readonly></td>
          <td><input id="email-${key.id}" value="${key.Email}" readonly></td>
          <td><input id="rollno-${key.id}" value="${key.rollno}" readonly></td>
          <td><input id="dept-${key.id}" value="${key.department}" readonly></td>

          <td><input id="password-${key.id}" value="${key.password}" readonly></td>
          <td id="edit-${key.id}">
              <i onclick="editRow('${key.id}')" class="fa-regular fa-pen-to-square"></i>
          </td>
          <td>
              <i onclick="myrecordRemove('${key.id}')" class="fa-solid fa-delete-left"></i>
          </td>
          <td id="save-${key.id}" style="display:none;">
              <i onclick="saveRow('${key.id}')" class="fa-solid fa-floppy-disk"></i>
          </td>
      </tr>`;
  });

  My_table += `</table>`;
  document.getElementById("show").innerHTML = My_table;
}

function editRow(id) {
  document.getElementById(`id-${id}`).removeAttribute('readonly');
  document.getElementById(`nm-${id}`).removeAttribute('readonly');
  document.getElementById(`email-${id}`).removeAttribute('readonly');
  document.getElementById(`password-${id}`).removeAttribute('readonly');

  document.getElementById(`edit-${id}`).style.display = "none"; // Hide edit button
  document.getElementById(`save-${id}`).style.display = "inline"; // Show save button
}

function saveRow(id) {
  let myid = document.getElementById(`id-${id}`).value;
  let myname = document.getElementById(`nm-${id}`).value;
  let myemail = document.getElementById(`email-${id}`).value;
  let roll = document.getElementById(`rollno-${id}`).value;
  let dept = document.getElementById(`dept-${id}`).value;

  let mypassword = document.getElementById(`password-${id}`).value;

  let url = `http://localhost:3000/registration/${id}`;
  fetch(url, {
      method: "PUT",
      body: JSON.stringify({
          id: myid,
          name: myname,
          Email: myemail,
          rollno: roll,
          department:dept ,

          password: mypassword
      }),
      headers: {
          "Content-type": "application/json;charset=utf-8",
      }
  })
      .then((response) => {
          if (response.ok) {
              alert("Data updated successfully");
              show(); // Refresh the table
          } else {
              throw new Error("Error while updating");
          }
      })
      .catch((error) => {
          console.log(error);
      });
}

function myrecordRemove(id) {
  let url = `http://localhost:3000/registration/${id}`;
  fetch(url, {
      method: "DELETE",
  })
      .then((response) => {
          if (response.ok) {
              alert("Record deleted");
              show(); // Refresh the table after deletion
          } else {
              throw new Error('Error');
          }
      })
      .catch((error) => {
          console.log(error);
      });
}

show(); // Initial call to show the data
