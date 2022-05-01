// Edit profile page
const header = this.document.getElementById("header")
window.addEventListener("scroll", function(){
    
    header.classList.toggle("sticky", window.scrollY > 0)
   // header.classList.toggle("header-onscroll", window.scrollY > 0)
})

const upload_file = document.querySelector("#upload_file");
const upload_EP = document.querySelector("#upload_EP");
const delete_EP = document.querySelector("#delete_EP");
const EP_img = document.querySelector("#EP_img");
const img_over = document.querySelector(".img-over-hidden")


upload_EP.addEventListener("click",function(){
   upload_file.click(); 
})

upload_file.addEventListener("change",function(){
    const file = this.files[0];
     showImage(file);

})
function showImage(file){
    EP_img.classList.remove("img-over-hidden");
    if(file){
        let fileType = file.type;
        const validFileType = ['image/jpeg' , 'image/png' , 'image/jpg'];
        if(validFileType.includes(fileType)){
            const reader = new FileReader(file);
            reader.readAsDataURL(file)
            reader.onload = function(){
                EP_img.src = reader.result;
            } 
        }else{
            swal("Please select an image file!", {
                buttons:false,
                timer:3000
            });
            
        }
       
    }
}
delete_EP.addEventListener("click", function(){
    swal({
        text:"Are you sure you want to delete?",
        icon:"warning",
        buttons:true,
        dangerMode:true
    })
    .then((willDelete) => {
        if(willDelete){
            swal("Your file has been deleted!",{
                icon:"success",
                buttons:false,
                timer:3000
            });
            EP_img.src = "./../images/04_Top Seller/avt-3.jpg"

        }
    })
})

EP_img.addEventListener("drop",function(event){
    event.preventDefault();
    console.log("1")
    const file = event.dataTransfer.files[0];
    console.log("2")
    showImage(file);
    console.log("3")
})

EP_img.addEventListener("dragover", (event)=>{
    event.preventDefault();
    EP_img.classList.add("img-over-hidden");
})
EP_img.addEventListener("dragleave", (ev)=>{
    ev.preventDefault();
    EP_img.classList.remove("img-over-hidden");
})


/// header search
const nav_search = document.getElementById("nav-search");
const nav_item = document.getElementsByClassName("nav-item");
const search_input = document.getElementById("search_input");
const search_close_btn = document.querySelector("#search-close-btn");

               
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