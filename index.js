// MODAL WRAPPER STARTED

let modalWrapper = document.querySelector(".modal-wrapper"),
    open = document.querySelector("#login"),
    close = document.querySelector("#close"),
    body = document.querySelector('body');


open.addEventListener("click", () => {
    modalWrapper.style.display = "flex";
    document.body.style.overflow = "hidden";
})



modalWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-wrapper-title')) {
        modalWrapper.style.display = "flex";
        document.body.style.overflow = "hidden";
    } else {
        modalWrapper.style.display = "none";
        console.log(e.target.classList)
        document.body.style.overflow = "visible";
    }
})

// MODAL WRAPPER ENDED