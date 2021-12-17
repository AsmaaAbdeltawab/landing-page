/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 * coded by Eng: Asmaa Mohamed Abdeltawab 
 * Email: asmamohamed18696@gmail.com
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const uList = document.getElementById('navbar__list');




const addRemoveActive = function(){
  for(let section of sections){
    let sectionPosition = section.getBoundingClientRect().top; //take it from mdn 
    if(sectionPosition >= 0 && sectionPosition < 380){
        section.classList.add("section-active");
        document.querySelector(`#${section.id}`).classList.add('active-nav-item');

    }else{
        section.classList.remove("section-active");
        document.querySelector(`#${section.id}`).classList.remove('active-nav-item');
        
    }
  }
}



const makeNavbarItems = function(){
    for(let  section of sections){
      data = section.getAttribute("data-nav");
      sectionId =section.getAttribute('id');
     // console.log(data); //test for the return value*/
      listItem = document.createElement("li");
      listItem.innerHTML= `${data}`;
      listItem.classList.add('menu__link');
      listItem.setAttribute('id', `${sectionId}`);
      // Scroll to section on link click
      listItem.addEventListener('click',(e) => { 
        section.scrollIntoView({behavior: "smooth"});
      })
      //add li to the navbar 
      uList.appendChild(listItem);
  
    }
  }


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll' ,addRemoveActive);


// build the nav
makeNavbarItems();





