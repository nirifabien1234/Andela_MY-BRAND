//form validation using javascript
const contactMe = document.getElementById('contact'); // contact me page container
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const lastName = document.getElementById('lastName');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const formControl = document.querySelector('.form-control');
const smallTag1 = document.querySelector('#small1')
const smallTag2 = document.querySelector('#small2')
const smallTag3 = document.querySelector('#small3')
const smallTag4 = document.querySelector('#small4')
const smallTag5 = document.querySelector('#small5')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    console.log('done');
   
    
});
// let firstName, lastName, userEmail, subject, message;


function checkInputs() {
    //get the values from the inputs
    const fNameValue = firstName.value.trim();
    const lNameValue =  lastName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    
    //validation for the first name input
    if(fNameValue === ''){
        firstName.className ="field errorBorder";
        smallTag1.className ="error";
        smallTag1.innerText = "First name cannot be empty!";
        
    }else {
        firstName.className ='field successBorder';
        smallTag1.className ="";
        smallTag1.innerText = "";
    }

    //validation for the last name input
    if(lNameValue === ''){
        lastName.className ="field errorBorder";
        smallTag2.className ="error";
        smallTag2.innerText = "Last name cannot be empty!";
        
    }else {
        lastName.className ='field successBorder';
        smallTag2.className ="";
        smallTag2.innerText = "";
    }

    //validation for the email input
    if(emailValue === ''){
        email.className ="field errorBorder";
        smallTag3.className ="error";
        smallTag3.innerText = "Email cannot be empty!";
        
        
    }

    else {
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(emailValue) ){
            email.className ='field successBorder';
            smallTag3.className ="";
            smallTag3.innerText = "";
          } else {
            // invalid email
            email.className ="field errorBorder";
            smallTag3.className ="error";
            smallTag3.innerText = "Invalid email!";
          }
        
    }
        //validation for the subject input
    if(subjectValue === '') {
        subject.className ="field errorBorder";
        smallTag4.className ="error";
        smallTag4.innerText = "Subject cannot be empty!";
        
    }else {
        subject.className ='field successBorder';
        smallTag4.className ="";
        smallTag4.innerText = "";
    }
    //validation for the message input
    if(messageValue === ''){
        message.className ="field area errorBorder";
        smallTag5.className ="error";
        smallTag5.innerText = "Message cannot be empty!";
        
    }else {
        message.className ='field area successBorder';
        smallTag5.className ="";
        smallTag5.innerText = "";
    }
    if(fNameValue !== '' && lNameValue !== '' && emailValue !== '' &&  subjectValue !== '' &&  messageValue){
        firebase.database().ref('Contact_message').push({
            firstName: fNameValue,
            lastName : lNameValue,
            email : emailValue,
            subject : subjectValue,
            message: messageValue
            
        })
        
    }else{
        alert('Please fill all text fields!')
    }
    
}
