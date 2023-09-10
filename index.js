function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const text= document.querySelector(".text-2");
  const textLoad=() =>{
    setTimeout(()=>{
      text.textContent="Software Developer"
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
  