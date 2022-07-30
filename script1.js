const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const elements = document.querySelectorAll("form input,form select");
    let checker = 3;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute("data-required") && elements[i].value === "") {
            elements[i].classList.add('empty-elem');
            elements[i].nextElementSibling.classList.add('alert-block');
            checker--;
        }
        else {
            elements[i].classList.remove('empty-elem');
            elements[i].nextElementSibling.classList.remove('alert-block');
        }
        elements[i].addEventListener('input',()=>{
            elements[i].classList.remove('empty-elem');
            elements[i].nextElementSibling.classList.remove('alert-block');
        })
    }
    if (checker===3){
        window.location.href="form2.html";
    }
})