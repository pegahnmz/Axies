// Edit profile page

const upload_file = document.querySelector("#upload_file");
const upload_EP = document.querySelector("#upload_EP");
const delete_EP = document.querySelector("#delete_EP");
const EP_img = document.querySelector("#EP_img");





upload_EP.addEventListener("click",function(){
   upload_file.click(); 
})

upload_file.addEventListener("change",function(){
    const file = this.files[0];
    console.log(file)
    
    if(file){
        const reader = new FileReader(file);
        
        reader.onload = function(){
            
            const result = reader.result;
            console.log(result)
            EP_img.src = result;
        }
        reader.onload = (result) => {
            console.log(result)
            EP_img.src = result.target.result;
        };
    }
})