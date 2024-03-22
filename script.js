const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY >120);
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
}

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br>Email: ${email.value}<br>Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "udhayam27051999@gmail.com",
        Password : "B709B01DB5909F6896E436D86F592625646C",
        To : 'udhayam27051999@gmail.com',
        From : "udhayam27051999@gmail.com",
        Subject : "Message from Client",
        Body : bodyMessage
    }).then(
      message => {
        if(message== "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent Successfully",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
    form.reset();
    return false;
});
