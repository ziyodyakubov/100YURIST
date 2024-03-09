let modalWrapper = document.querySelector(".modal-wrapper"),
    open = document.querySelector("#login"),
    open2 = document.querySelector('#login2'),
    close = document.querySelector("#close"),
    body = document.querySelector('body'),
    result = document.querySelector('.result-section'),
    close2 = document.querySelector('#close2'),
    close3 = document.querySelector('#close3'),
    showBtn = document.querySelector('#show'),
    dropdownBtn = document.querySelector('.bx-menu'),
    dropdownRes = document.querySelector('.dropdown');


dropdownBtn.addEventListener('click',()=>{
    dropdownRes.style.display = 'flex';
})


showBtn.addEventListener('click',()=>{
    result.style.display = "flex";
    modalWrapper.style.display = 'none';
    document.body.style.overflow = "hidden";
})


close2.addEventListener('click',()=>{
    result.style.display = "none";
    document.body.style.overflow = "visible";
})

close3.addEventListener('click',()=>{
    result.style.display = "none";
    document.body.style.overflow = "visible";
})

open.addEventListener("click", () => {
    modalWrapper.style.display = "flex";
    document.body.style.overflow = "hidden";
})

open2.addEventListener("click", () => {
    modalWrapper.style.display = "flex";
    document.body.style.overflow = "hidden";
})

close.addEventListener('click',()=>{
    modalWrapper.style.display = "none";
    document.body.style.overflow = "visible";
})
