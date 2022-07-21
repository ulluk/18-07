const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {

    const userSurname = document.querySelector('#surname');
    const userName = document.querySelector('#name');
    const userPatronymic = document.querySelector('#patronymic');
    const userBirthDate = document.querySelector('#birth-date');
    const userHomeAddress = document.querySelector('#home-address');
    const userSerialNumber = document.querySelector('#serial-number');
    const userTIN = document.querySelector('#TIN');
    const userDateOfReceiving = document.querySelector('#date-of-receiving');
    const userNumber = document.querySelector('#number');
    const userEmail = document.querySelector('#email');
    const userBank = document.querySelector('#Banks');

    let arr = [userSurname.value, userName.value, userPatronymic.value, userBirthDate.value, userHomeAddress.value, userSerialNumber.value, userSerialNumber.value
        , userTIN.value, userDateOfReceiving.value, userNumber.value, userEmail.value, userBank.value]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null || arr[i] === undefined || arr[i] === '') {
            alert("Вы не заполнили все поля")
            return;
        }
    }

    localStorage.surname = userSurname.value;
    localStorage.name = userName.value;
    localStorage.patronymic = userPatronymic.value;
    localStorage.birthDate = userBirthDate.value;
    localStorage.address = userHomeAddress.value;
    localStorage.serialNumber = userSerialNumber.value;
    localStorage.TIN = userTIN.value;
    localStorage.dateOfReceiving = userDateOfReceiving.value;
    localStorage.number = userNumber.value;
    localStorage.email = userEmail.value;
    localStorage.bank = userBank.value;
    window.location.href = "form2.html"
})