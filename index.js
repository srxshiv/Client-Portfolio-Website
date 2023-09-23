
// open linkss

function openLink1() {
  window.open('https://devpost.com/software/careergpt', '_blank');
}
function openLink2() {
  window.open('https://github.com/divyanshrm/CareerGPT-Shellhacks', '_blank');
}
function openLink3() {
  window.open('https://github.com/divyanshrm/myReddit', '_blank');
}
function openLink4() {
  window.open('https://github.com/divyanshrm/Jobply', '_blank');
}



// ham nav ka 
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // typing animation ka 
  const text= document.querySelector(".text-2");
  const textLoad=() =>{
    setTimeout(()=>{
      text.textContent="NLP Researcher"
    }, 0);
    setTimeout(()=>{
      text.textContent="Data Scientist"
    }, 4000);
    setTimeout(()=>{
      text.textContent="FullStack Developer"
    }, 8000);
  }

  textLoad();
  setInterval(textLoad,12000);

  // contact form ka
  function sendMail(){
    Email.send({
      // SecureToken: "c93a4673-7dcd-4b76-8790-05f1a3fe51e4",
      Host: "smtp.elasticemail.com",
      Username: "divyanshucs127@gmail.com",
      Password: "BF9E3E1787446468AAA4EE09E5652058AC00",
      To : "divyanshucs127@gmail.com",
      From : document.querySelector("#contact-email").value,
      Subject : "New Enquiry from Website",
      Body : "Name : " + document.querySelector("#contact-name").value
           + "<br> Email : "+ document.querySelector("#contact-email").value
           + "<br> Phone no. : "+ document.querySelector("#contact-phone").value
           + "<br> Message: " +document.querySelector("#contact-msg").value
  }).then(
    message=> alert("Message Sent Succesfully"),
    console.log("work")
  )
  }


  // SCROLL ANIMATIONSS


  AOS.init({
    duration:1200
  });


  // light theme dark theme

  const theme = document.querySelector(".tooltip");
  const tooltip= document.querySelector(".tooltiptext")
  const dslogo=document.querySelector(".logo-img")

  theme.onclick = function(){
   document.body.classList.toggle("light-theme");

   if(document.body.classList.contains("light-theme")){
    theme.style.color="black";
    tooltip.innerHTML="NOX!";
    tooltip.style.margin="30px 0 0 -6px";
    dslogo.src="./images/lightlogo.png"
   }else{
    theme.style.color="white";
    tooltip.innerHTML="LUMOS!";
    tooltip.style.margin="30px 0 0 -15px";
    dslogo.src="./images/darklogo.png"
   }
  }

