//links open

function openLinks(url) {
  window.open(url, '_blank');
}

const links = [
  'https://github.com/divyanshrm',
  'https://linkedin.com/in/divyansh-singh-604',
  'https://devpost.com/software/careergpt',
  'https://github.com/divyanshrm/CareerGPT-Shellhacks',
  'https://github.com/divyanshrm/myReddit',
  'https://github.com/divyanshrm/Jobply',
  'https://github.com/divyanshrm/Everything-AI-Proctor',
  'https://github.com/divyanshrm/Polyth-Net-Classification-of-Polythene-Bags-Using-Deep-Learning',
  'https://github.com/divyanshrm/Chatbot_from_Reddit',
  'https://ieeexplore.ieee.org/document/9375766'
];

function openLink(index) {
  const url = links[index];
  if (url) {
    openLinks(url);
  } else {
    console.error('Link at index ${index} does not exist.');
  }
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

