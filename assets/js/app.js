
// Событие скролла //

    window.addEventListener("scroll", function(){
        let scrollPoss = window.scrollY;

        if(scrollPoss>0){
            header.classList.add("fixed");
        }
        else{
            header.classList.remove("fixed");
        }
        
    });

    const btn = document.querySelector("#contact");
    const navLinks = document.querySelectorAll(".nav_link");


    for(let navItem of navLinks){
        navItem.addEventListener("click", function(){
            console.log('link clicked');
        });
    }