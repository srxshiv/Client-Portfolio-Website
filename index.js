
// open linkss

function openGithub(){
  window.open('https://github.com/divyanshrm', '_blank');
}
function openLinkedin(){
  window.open('https://linkedin.com/in/divyansh-singh-604', '_blank');
}
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
function openLink5() {
  window.open('https://github.com/divyanshrm/Everything-AI-Proctor', '_blank');
}
function openLink6() {
  window.open('https://github.com/divyanshrm/Polyth-Net-Classification-of-Polythene-Bags-Using-Deep-Learning', '_blank');
}
function openLink7() {
  window.open('https://github.com/divyanshrm/Chatbot_from_Reddit', '_blank');
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
      text.textContent="Full Stack Developer"
    }, 8000);
  }

  textLoad();
  setInterval(textLoad,12000);

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

