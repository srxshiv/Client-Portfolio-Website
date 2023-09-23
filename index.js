

  
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
      SecureToken : "5daf0876-669f-49b5-b11e-e370e9cce41e",
      To : 'divyanshucs127@gmail.com',
      From : document.querySelector("#contact-email").value,
      Subject : "New Enquiry from Website",
      Body : "Name : " + document.querySelector("#contact-name")
           + "<br> Email : "+ document.querySelector("#contact-email")
           + "<br> Phone no. : "+ document.querySelector("#contact-phone")
           + "<br> Message: " +document.querySelector("#contact-msg")
  }).then(
    message=> alert("Message Sent Succesfully")
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

