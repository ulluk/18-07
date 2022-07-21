funk = () => {

    const Surname = document.querySelector('#g-surname');
    const name = document.querySelector('#g-name');
    const patronymic = document.querySelector('#g-patronymic');
    const birthDate = document.querySelector('#g-birth-date');
    const homeAddress = document.querySelector('#g-home-address');
    const serialNumber = document.querySelector('#g-serial-number');
    const TIN = document.querySelector('#g-TIN');
    const dateOfReceiving = document.querySelector('#g-date-of-receiving');
    const number = document.querySelector('#g-number');
    const email = document.querySelector('#g-email');
    const bank = document.querySelector('#g-Banks');

    Surname.value = localStorage.surname;
    name.value = localStorage.name;
    patronymic.value = localStorage.patronymic;
    birthDate.value = localStorage.birthDate;
    homeAddress.value = localStorage.address;
    serialNumber.value = localStorage.serialNumber;
    TIN.value = localStorage.TIN;
    dateOfReceiving.value = localStorage.dateOfReceiving;
    number.value = localStorage.number;
    email.value = localStorage.email;
    bank.value = localStorage.bank;

    console.log(localStorage)
}
funk();

