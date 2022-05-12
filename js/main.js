const nav_search = document.getElementById("nav-search");
const nav_item = document.getElementsByClassName("nav-item");
const search_input = document.getElementById("search_input");
const search_close_btn = document.querySelector("#search-close-btn");
const to_top_btn = document.querySelector("#to_top_btn");
const dark_mode = document.querySelector("#dark_mode");
const light_mode = document.querySelector("#light_mode")
const body = document.querySelector("body")

dark_mode.addEventListener('click',() => {
    body.classList.add("dark");
    body.classList.remove("light");
})

light_mode.addEventListener('click',() => {
    body.classList.remove("dark");
    body.classList.add("light");
})

to_top_btn.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

window.addEventListener('scroll', () => {
    
        
    
})
               
nav_search.addEventListener("click", function () {
    for(let i = 0; i < nav_item.length; i++){
        nav_item[i].classList.remove("nav-show-item")
        nav_item[i].classList.add("nav-hide-item")
        
        
    }
       search_input.classList.remove("hide")
        search_input.classList.add("show")
        nav_search.classList.remove("text-gradient-hover")
        search_close_btn.classList.remove("hide")  
        search_close_btn.classList.add("show-close-btn")
        search_input.value="";
  }, false)

  document.addEventListener('click', function(event){
      const header = document.getElementById("header");
      const isclickedinside = header.contains(event.target);
      const isclickedonclosebtn = search_close_btn.contains(event.target);

      if((!isclickedinside )||(isclickedonclosebtn)){
          for(let i = 0; i < nav_item.length; i++){
              nav_item[i].classList.remove("nav-hide-item")
              nav_item[i].classList.add("nav-show-item")
          }
           nav_search.classList.remove("nav-hide-item")
           search_input.classList.add("hide")
            search_input.classList.remove("show")
            
            nav_search.classList.add("text-gradient-hover")
          search_close_btn.classList.remove("show-close-btn")
          search_close_btn.classList.add("hide")
      }
  })

 const header = this.document.getElementById("header")
window.addEventListener("scroll", function(){
    
    header.classList.toggle("sticky", window.scrollY > 0)
    to_top_btn.classList.toggle("showbtn",window.scrollY > 0)
  //  header.classList.toggle("header-onscroll", window.scrollY > 0)
})

 





 