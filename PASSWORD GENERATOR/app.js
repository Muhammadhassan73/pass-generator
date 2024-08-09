const uppercase = "ABCDEFGHIJKLMNOPQRSTWXYZ"
const lowecase = "abcdefghijklmnopqrstwxyz"
const numbers = "1234567890"
const symbol = "!@#$%^&*()<>:_+-?/,"
const allChars = uppercase + lowecase + numbers + symbol
let lenght = 12
let password =""
let passwordbox = document.getElementById('passwordbox')

let generate_btn = document.getElementById('generate_btn')

function generatepassword (){

    password= ""
    passwordbox.value = ""
  
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowecase[Math.floor(Math.random()*lowecase.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]
    password += symbol[Math.floor(Math.random()*symbol.length)]
    while(lenght>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
    
    }
    passwordbox.value = password
    
   
}



generate_btn.addEventListener("click", generatepassword)