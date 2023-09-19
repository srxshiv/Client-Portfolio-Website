

  
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
    duration:1000
  });
