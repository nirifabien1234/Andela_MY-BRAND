//create element and render users
const renderUser = doc => {
    const tr = 
        <tr>
            <td>${doc.data().firstName}</td>
            <td>${doc.data().lastName}</td>
            <td>${doc.data().phone}</td>
            <td>${doc.data().email}</td>
            
        </tr>
}

// CSS PROGRESS BAR CODES
let percent = document.getElementById("percent");
let counter = 0;
setInterval(() => {
    if(counter == 65){
        clearInterval()
    }
    else{
        counter += 1;
        percent.innerHTML = counter + "%";
    }
    
}, 30)

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav_list");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}
db.collection('users').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.data());
    });
})

//model js
const loginBtn = document.querySelector('.display-login-modal');
loginBtn.addEventListener('click', ()=> {
    
    document.getElementById('modal').display='block';
});
