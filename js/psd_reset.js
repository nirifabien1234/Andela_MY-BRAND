
const emailLogin = document.querySelector('#emailLogin')
const passwordReset = document.querySelector('#passwordReset')
const passwordResetConfirm = document.querySelector('#passwordResetConfirm')
const form = document.querySelector('#reset-form')
const smallTag8 = document.querySelector('#small8')//from login form
const smallTag9= document.querySelector('#small9')//from login form
const smallTag10= document.querySelector('#small10')//from login form


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUser();
});

function checkUser() {
    const emailUser = emailLogin.value.trim();
    const userPassword = passwordReset.value.trim();
    const confirm = passwordResetConfirm.value.trim();

    
     //validation for the email input
    if(emailUser === ''){
        emailLogin.className ="field errorBorder";
        smallTag8.className ="error";
        smallTag8.innerText = "Email cannot be empty!";
        
        
    }

    else {
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(emailUser) ){
            emailLogin.className ='field successBorder';
            smallTag8.className ="";
            smallTag8.innerText = "";
          } else {
            // invalid email
            emailLogin.className ="field errorBorder";
            smallTag8.className ="error";
            smallTag8.innerText = "Invalid email!";
          }
        
    }

       //validation for the password input
    if(userPassword === ''){
        passwordReset.className ="field errorBorder";
        smallTag9.className ="error";
        smallTag9.innerText = "Password cannot be empty!";
    }else {
            // invalid password
            passwordReset.className ="field successBorder";
            smallTag9.className ="";
            smallTag9.innerText = "";
          }

    //validation for the confirm password input
    if(confirm === ''){
        passwordResetConfirm.className ="field errorBorder";
        smallTag9.className ="error";
        smallTag9.innerText = "Password cannot be empty!";
    }
    else if(confirm !== userPassword){
        passwordResetConfirm.className ="field errorBorder";
        smallTag10.className ="error";
        smallTag10.innerText = "Passwords does not match!";
    }
        else {
            // invalid password
            passwordResetConfirm.className ="field successBorder";
            smallTag10.className ="";
            smallTag10.innerText = "";
            }
}