const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const iconClose = document.querySelector('.icon-close');
const ptnpop = document.querySelector('.btnLogin-popup');
const title = document.querySelector('.title');


ptnpop.addEventListener("click" , ()=> {
    wrapper.classList.add("active-pupop");
});

ptnpop.addEventListener("click" , ()=> {
    title.classList.add("active-title");
});


iconClose.addEventListener("click" , ()=> {
    wrapper.classList.remove("active-pupop");
});

iconClose.addEventListener("click" , ()=> {
    title.classList.remove("active-title");
});



