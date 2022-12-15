
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.day;
    document.getElementById('thirdNameOutput').innerText = initPerson.thirdName;
    document.getElementById('profesOutput').innerText = initPerson.profes;
};

document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('firstNameOutput').innerText = "Имя";
    document.getElementById('surnameOutput').innerText = "Фамилия";
    document.getElementById('birthYearOutput').innerText = "Дата рождения";
    document.getElementById('thirdNameOutput').innerText = "Отчество";
    document.getElementById('profesOutput').innerText = "Профессия";
});

document.getElementById('resetButtonGeneration').addEventListener('click', function () {
    document.getElementById('genderOutput').innerText = location.reload(gender);
    document.getElementById('firstNameOutput').innerText = location.reload(firstName);
    document.getElementById('surnameOutput').innerText = location.reload(surName);
    document.getElementById('birthYearOutput').innerText = location.reload(day);
    document.getElementById('thirdNameOutput').innerText = location.reload(thirdName);
    document.getElementById('profesOutput').innerText = location.reload(profes);
});