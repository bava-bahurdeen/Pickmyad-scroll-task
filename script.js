let content_scroll=document.querySelector(".content-scroll");
let box=document.querySelector(".box");
let box_image=document.querySelector(".box__image")


content_scroll.addEventListener("scroll",()=>{
    console.log(content_scroll.scrollTop);
    let contentTop=content_scroll.scrollTop;

    if(contentTop<542){
box_image.src="/foodie-shop.webp";
box.classList.remove("cl1")
    }
  else if(contentTop>543||contentTop<900){
box_image.src="/foodie-links.webp";
box.classList.add("cl1")
    }
    else if(contentTop>940){
        box_image.src="/foodie-brand.webp"; 
        box.classList.add("cl2")
    }

    console.log(contentTop);
   
})




