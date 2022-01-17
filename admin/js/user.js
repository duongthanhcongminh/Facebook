let userFirstname = document.getElementById("userFirstname")
let userSurname = document.getElementById("userSurname")
let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let userDate = document.getElementById("userDate")
let male = document.getElementById("male")
let feMale = document.getElementById("feMale")
let userAdd = document.getElementById("userAdd")
let userTable = document.querySelector("#userTable tbody")
let userList = []

let editUserfirstname = document.getElementById("editUserfirstname")
let editUsersurname = document.getElementById("editUsersurname")
let editUseremail = document.getElementById("editUseremail")
let editUserpassword = document.getElementById("editUserpassword")
let editUserdate = document.getElementById("editUserdate")
let editMale = document.getElementById("editMale")
let editFemale = document.getElementById("editFemale")
let saveUser = document.getElementById("saveUser")
userDate.defaultValue = "1990-12-01";

function showUser(uList){
    userTable.innerHTML = ""
    if (uList.length > 0){
        uList.forEach((uItem,index)=>{
            userTable.innerHTML += `
            <tr>
                <th>${index+1}</th>
                <td>${uItem.firstname +" "+ uItem.surname}</td>
                <td>${uItem.email}</td>
                <td>${uItem.date}</td>
                <td>${uItem.sex}</td>
                <td>
                <button class="btn btn-primary" onclick="showPopupUser(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger" onclick="delUser(${index})" >
                    <i class="bi bi-trash"></i>
                </button>
                </td>
            </tr>
            `
        })
    }
    else{
        userTable.innerHTML = `
        <tr>
            <th colspan = "6">Không có dữ liệu người dùng</th>
        </tr>
        `
    }
}

function delUser(index){
    userList.splice(index,1)
    showUser(userList)
}

function editUser(index){
    userList[index].firstname = editUserfirstname.value
    userList[index].surname = editUsersurname.value
    userList[index].email = editUseremail.value
    userList[index].date = editUserdate.value
    userList[index].sex = editMale.checked ? "Nam" : "Nữ"
    showUser(userList)
}

function showPopupUser(index){
    editUserfirstname.value  =  userList[index].firstname
    editUsersurname.value = userList[index].surname
    editUseremail.value = userList[index].email
    editUserdate.value = userList[index].date
    editUserpassword.value = userList[index].pass
    if(userList[index].sex == "Nam"){
        editMale.checked = true
    }
    else{
        editFemale.checked = true
    }
    saveUser.setAttribute("data-index",index)
}
showUser(userList)

userAdd.addEventListener("click",function(e){
    e.preventDefault()
    let gioitinh = male.checked ? "Nam" : feMale.checked ? "Nữ" : ""
    if (userFirstname.value && userSurname.value && userEmail.value && userPassword.value && userDate.value && gioitinh)
    {
        userList.push({
            firstname: userFirstname.value,
            surname: userSurname.value,
            email: userEmail.value,
            pass: userPassword.value,
            date: userDate.value,
            sex: gioitinh
        })
        userFirstname.value = ""
        userSurname.value = ""
        userPassword.value = ""
        userEmail.value = ""
        userDate.defaultValue = "1990-12-01";
        male.checked = feMale.checked = false
        showUser(userList)
        console.log(userList)
    }
    else
    {
        alert("Bạn cần phải nhập đủ thông tin")
        userFirstname.focus()
    }
})

saveUser.addEventListener("click",function(){
    editUser(this.getAttribute("data-index"))
})