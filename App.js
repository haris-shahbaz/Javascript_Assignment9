



function mysubmit() {
    event.preventDefault();

}


function hideAndshow() {
    let show = document.getElementById("password");
    let hide = document.getElementById("hide_button");

    if (hide.checked) {
        show.type = "text";
    } else {
        show.type = "password"
    }
}


function sibmitForm() {
    let mail = document.getElementById("email");
    let pass = document.getElementById("password");
    let displaydata = document.getElementById("displayData");
    displaydata.innerHTML = "<h2>Form Data</h2>" +
        "<p><strong>Your Email:</strong> " + email.value + "</p>" +
        "<p><strong>Your Password:</strong> " + password.value + "</p>";
}


function readMore() {
    document.getElementById("read_button").style.display = "none";
    let p = document.getElementById("para");
    let read = document.getElementById("moreData");read.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non enim ad temporibus maxime incidunt reprehenderit natus pariatur ? Delectus, voluptate! Dolores omnis ipsum voluptatibus alias repellat officiisprovident iusto ad commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt ad autem qui consequuntur eaque! Facere veniam voluptas dignissimos nobis ab, assumenda mollitia quidem consequunturperspiciatis.Voluptatum molestiae magnam inventore odit ?</p > "
}


function addStudent() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}

function editStudent(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var age = row.cells[1].innerHTML;

    document.getElementById('editName').value = name;
    document.getElementById('editAge').value = age;

    document.getElementById('editForm').style.display = 'block';
    document.getElementById('tableBody').deleteRow(row.rowIndex);
}

function updateStudent() {
    var name = document.getElementById('editName').value;
    var age = document.getElementById('editAge').value;

    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';

    document.getElementById('editName').value = '';
    document.getElementById('editAge').value = '';
    document.getElementById('editForm').style.display = 'none';
}

function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    document.getElementById('studentTable').deleteRow(row.rowIndex);
}

function cancelEdit() {
    document.getElementById('editName').value = '';
    document.getElementById('editAge').value = '';
    document.getElementById('editForm').style.display = 'none';
}