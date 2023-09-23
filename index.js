

  
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
      text.textContent="Web Developer"
    }, 8000);
  }

  textLoad();
  setInterval(textLoad,12000);

  // contact form ka

  function sendEmail(){
    
      Email.send({
        Host : "smtp.gmail.com",
        Username : "divyanshucs127@gmail.com",
        Password : "Vaishnavi@1234",
        To : 'divyanshucs127@gmail.com',
        From : document.getElementById.apply("contact-email").value,
        Subject : "Website Contact Form Inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
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

