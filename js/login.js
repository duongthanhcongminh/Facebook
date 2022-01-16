// khai báo biến
let emailInput = document.getElementById("emailInput")
let passInput = document.getElementById("passInput")
let emailRegex = /^[a-zA-Z0-9]+@[a-z]+(.[a-z]+)$/
let passRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{6,}$/


// khai báo hàm validInput
function validInput(elInput,regExpression){ 
    // giá trị của input được tác động 
    let value = elInput.value
    // lấy giá trị của thuộc tính data-warning trong input được tác động
    let elWarning = document.getElementById(`${elInput.getAttribute("data-warning")}`)
    
    if(value)
    {
        let isValid = regExpression.test(value)
        if(isValid)
        {
            elWarning.textContent = ""
        }
        else
        {
            elWarning.textContent = elWarning.getAttribute("data-message")
        }
    }
    else
    {
        elWarning.textContent = "This field can't be blank"
    }
}

// bắt sự kiện
emailInput.addEventListener("blur",function(){
    validInput(this, emailRegex)
})  
passInput.addEventListener("blur",function(){
    validInput(this, passRegex)
})  

