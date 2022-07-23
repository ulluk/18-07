const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const elements = document.querySelectorAll("form input,form select");
    let checker;
    checker = 0;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute('data-required') && elements[i].value === '' && elements[i].hasAttribute('data-surname')) {
            elements[i].classList.add('empty-elem');
            document.querySelector('#alert-surname').classList.add('alert-block')
            checker++;
        }
        if (elements[i].hasAttribute('data-required') && elements[i].value !== '' && elements[i].hasAttribute('data-surname')) {
            elements[i].classList.remove('empty-elem');
            document.querySelector('#alert-surname').classList.remove('alert-block')
            checker--;
        }
        if (elements[i].hasAttribute('data-required') && elements[i].value === '' && elements[i].hasAttribute('data-name')) {
            elements[i].classList.add('empty-elem');
            document.querySelector('#alert-name').classList.add('alert-block');
            checker++;
        }
        if (elements[i].hasAttribute('data-required') && elements[i].value !== '' && elements[i].hasAttribute('data-name')) {
            elements[i].classList.remove('empty-elem');
            document.querySelector('#alert-name').classList.remove('alert-block')
            checker--;
        }
        if (elements[i].hasAttribute('data-required') && elements[i].value === '' && elements[i].hasAttribute('data-patronymic')) {
            elements[i].classList.add('empty-elem');
            document.querySelector('#alert-patronymic').classList.add('alert-block');
            checker++;
        }
        if (elements[i].hasAttribute('data-required') && elements[i].value !== '' && elements[i].hasAttribute('data-patronymic')) {
            elements[i].classList.remove('empty-elem');
            document.querySelector('#alert-patronymic').classList.remove('alert-block')
            checker--;
        }
    }
    console.log(checker)
})