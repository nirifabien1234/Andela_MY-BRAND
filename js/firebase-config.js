
const contactForm = document.querySelector('#form')
// ----------------------------------Fire base configrations--------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCq34tnBxDQU25c67eM9vYWYaeH6yTvR2I",
    authDomain: "my-brand-cryptotearer.firebaseapp.com",
    databaseURL: "https://my-brand-cryptotearer-default-rtdb.firebaseio.com",
    projectId: "my-brand-cryptotearer",
    storageBucket: "my-brand-cryptotearer.appspot.com",
    messagingSenderId: "326815881700",
    appId: "1:326815881700:web:012e54175620b017914ff1",
    measurementId: "G-N29M7PBWGY"
  };
  
// ----------fire base initialization---------------------
firebase.initializeApp(firebaseConfig);

// let firstName, lastName, userEmail, subject, message;
// function readFormData(){
//     lastName = document.querySelector('#lastName').value.trim();
//     userEmail = document.querySelector('#email').value.trim();
//     subject = document.querySelector('#subject').value.trim();
//     message = document.querySelector('#message').value.trim();
// }

// contactForm.onsubmit = function(){
//     console.log('done');
//     readFormData();
//     firebase.database().ref('ContactMessage/').push({
//         firstName: firstName,
//         lastName : lastName,
//         email : email,
//         subject : subject,
//         message: message
        
//     }).then((docRef) => {
//                 console.log("Document written with ID: ", docRef.id);
//             })
//             .catch((error) => {
//                 console.error("Error adding document: ", error);
//             });
//     alert('Message sent succefully!')
// }



// btnContact.addEventListener('click', e => {
//     e.preventDefault();
//     db.collection("contact").add({
//       firstName: contactPage.firstName.value,
//       lastName: contactPage.lastName.value,
//       email: contactPage.email.value,
//       subject: contactPage.subject.value,
//       message: contactPage.message.value,
//     }).then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });

//   });


    // ----------------------------------------Retrieve From FireBase------------
    // function SelectAllData(){
    //     var firebaseRef = firebase.database().ref("Comments");
    //     firebaseRef.on("value",function(snapshot) {
    //        snapshot.forEach(element => {
    //         var names = element.val().Names;
    //         var comment = element.val().Comments;
    //         var cbody = document.getElementById("article-comments");
    //         var dnames = document.createElement('div');
    //         var dcomment = document.createElement('div');
    //         dnames.innerHTML = names;
    //         dcomment.innerHTML = comment;
    //         cbody.appendChild(dnames);cbody.appendChild(dcomment);
    //         // AddDataToTable(names,comment);
    //        });
    //     })
    // }

    // window.onload = SelectAllData();




