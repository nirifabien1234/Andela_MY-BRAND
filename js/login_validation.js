const loginBtn = document.querySelector('.loginBtn')
const emailLogin = document.querySelector('#emailLogin')
const passwordLogin = document.querySelector('#passwordLogin')
const form = document.querySelector('#login-form')
const smallTag6 = document.querySelector('#small6')//from login form
const smallTag7 = document.querySelector('#small7')//from login form

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUser();
});

function checkUser() {
   let emailUser = emailLogin.value.trim();
   let passwordUser = passwordLogin.value.trim();

    
     //validation for the email input
    if(emailUser === ''){
        emailLogin.className ="field errorBorder";
        smallTag6.className ="error";
        smallTag6.innerText = "Email cannot be empty!";
        
        
    }

    else {
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(emailUser) ){
            emailLogin.className ='field successBorder';
            smallTag6.className ="";
            smallTag6.innerText = "";
          } else {
            // invalid email
            emailLogin.className ="field errorBorder";
            smallTag6.className ="error";
            smallTag6.innerText = "Invalid email!";
          }
        
    }

    //validation for the password input
    if(passwordUser === ''){
        passwordLogin.className ="field errorBorder";
        smallTag7.className ="error";
        smallTag7.innerText = "Password cannot be empty!";
    }else {
            // invalid password
            passwordLogin.className ="field successBorder";
            smallTag7.className ="";
            smallTag7.innerText = "";
          }



    firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)
    .then((userCredential) => {
        window.open("../Html/dashboard.html","_self");
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });



// -----------------------Form validation functions------------------

// function checkEmail(email){
//     expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if(expression.test(email) ==true){
//         // Email is good
//         return true
//     }else{
//         // Email is not good
//         return false
//     }
// }

// function checkPassword(password){
//     if(password < 6){
//         return false
//     }else{
//         return true
//     }
// }
          
        
    
    
}