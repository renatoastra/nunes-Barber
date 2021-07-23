const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll(".toggle")
const header = document.querySelector("#header")
const navHeight = header.offsetHeight
const links = document.querySelectorAll("#header ul li a")
const backBtn = document.querySelector('.back-to-top')

for (const e of toggle) {
  e.addEventListener("click", () => {
    nav.classList.toggle('show');
  })
}

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  })
}


function changeHeader(){
    
    if (window.scrollY >= navHeight) {
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
}

function btnBackToTop(){
  if(window.scrollY >= 570){
    backBtn.classList.add('show')
  } else{
   backBtn.classList.remove('show')
  }
 }


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints:{
    767:{
      slidesPerView: 2,
      setWrapperSize:true
    }
  }

});


const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  ` #home .image, #home .text,
    #about .image, #about .text,
    #services .card, #services .text,
    #testimonies .produto, #testimonies .title,
    #contact .links, #contact .text,
    footer .brand, footer .social`,
 {interval: 100})

 
 window.addEventListener('scroll', () => {
   changeHeader()
   btnBackToTop()
 })