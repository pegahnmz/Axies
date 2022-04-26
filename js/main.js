const nav_search = document.getElementById("nav-search");
const nav_item = document.getElementsByClassName("nav-item");
const search_input = document.getElementById("search_input");

nav_search.addEventListener("click", function () {
    for(let i = 0; i < nav_item.length; i++){
        nav_item[i].classList.remove("nav-show-item")
        nav_item[i].classList.add("nav-hide-item")
        search_input.classList.remove("hide")
        search_input.classList.add("show")
        
    }
  }, false)

  document.addEventListener('click', function(event){
      const header = document.getElementById("header");
      const isclickedinside = header.contains(event.target);
      if(!isclickedinside){
          for(let i = 0; i < nav_item.length; i++){
              nav_item[i].classList.remove("nav-hide-item")
              nav_item[i].classList.add("nav-show-item")
              search_input.classList.add("hide")
              search_input.classList.remove("show")
          }
      }
  })

 const header = this.document.getElementById("header")
window.addEventListener("scroll", function(){
    
    header.classList.toggle("sticky", window.scrollY > 0)
    header.classList.toggle("header-onscroll", window.scrollY > 0)
})

 


var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    effect:"slide",
    autoplay:{
        delay:3000,
        disableOnIntraction:false,

    },
    
    spaceBetween: 15,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  on:{
      init(){
          this.el.addEventListener("mouseenter", () =>{
              this.autoplay.stop();
          });
          this.el.addEventListener("mouseleave", () =>{
            this.autoplay.start();
        })
      }
  }
    
  });
  const myswiper = document.getElementById("swiper")
  myswiper.addEventListener("mouseenter", function(){
      
      swiper.autoplay.stop()
  })


 