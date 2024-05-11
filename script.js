const  hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navPage = document.querySelectorAll('i');

const navs = document.querySelectorAll('.nav-list');
const sections = document.querySelectorAll(".section");
const section = document.querySelectorAll('.sec');
const content = document.querySelector(".sec");
const theme = document.querySelector(".theme");




function pageFun(){
    for(let i =0; i < navs.length; i++){
        navs[i].addEventListener('click', function(){
            let  currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className+= ' active-btn';
        })
        
    }

    content.addEventListener("click", (e)=>{
        const id = e.target.dataset.id;
        if(id){
            navPage.forEach((navList)=>{
                navList.classList.remove("active");
            })


            e.target.classList.add("active");


            section.forEach((navLink)=>{
                navLink.classList.remove("active");
                
            })


            const element = document.getElementById(id);
                element.classList.add("active");
        }
    })


    
}

pageFun();


theme.addEventListener("click", ()=>{
    theme.classList.toggle("open");
    content.classList.toggle("open");
    theme.classList.toggle("fa-moon");
})