var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    effect:"slide",
    autoplay:{
        delay:3000,
        disableOnIntraction:false,

    },
    
    spaceBetween: 28,
  
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

   /* breakpoints: {
        1640: {
            slidesPerView: 1,
        }},
*/

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