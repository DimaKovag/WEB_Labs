document.addEventListener('DOMContentLoaded', function() {

    const phoneInput = document.getElementById('phone');
    Inputmask("+38(099) -999-99-99").mask(phoneInput);

});


const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const firstnameInput = document.getElementById('firstname');
const firstnameError = document.getElementById('firstnameError');

const surnameInput = document.getElementById('surname');
const surnameError = document.getElementById('surnameError');

const middlenameInput = document.getElementById('middlename');
const middlenameError = document.getElementById('middlenameError');

const dobInput = document.getElementById('dob');
const dobError = document.getElementById('dobError');

const passwordOK = /^[a-zA-Z0-90-9A-Za-zа-яґєіїА-ЯҐЄІЇ]{8,}$/;
const emailOK = /^[a-zA-Z0-9@.]+$/;
const namesOK = /^[а-яґєіїА-ЯҐЄІЇ]+$/;

let sub = false;

dobInput.addEventListener('input', function() {
    const selectedDate = new Date(dobInput.value);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
        dobError.textContent = 'Invalid date of birth! You can\'t be born in the future.';
        dobError.style.display = 'block';
        sub = false;
    } else {
        dobError.style.display = 'none';
        sub = true;
    }
});

passwordInput.addEventListener('input', function() {
    if (passwordOK.test(passwordInput.value)){
        passwordError.style.display = 'none';
        sub = true;
    }else{
        passwordError.textContent = 'Invalid password!(only numbers, english and ukrainian letters are accepted. Password must be at least 8 symbols long).';
        passwordError.style.display = 'block';
        sub = false;
    }
});

emailInput.addEventListener('input', function() {
    if (emailOK.test(emailInput.value)){
        emailError.style.display = 'none';
        sub = true;
    }else{
        emailError.textContent = 'Invalid email!(only numbers, english letters and symbols(@, .) are accepted).';
        emailError.style.display = 'block';
        sub = false;
    }
});

middlenameInput.addEventListener('input', function() {
    if (namesOK.test(middlenameInput.value)){
        middlenameError.style.display = 'none';
        sub = true;
    }else{
        middlenameError.textContent = 'Invalid middle name. Use ukrainian letters.';
        middlenameError.style.display = 'block';
        sub = false;
    }
});

firstnameInput.addEventListener('input', function() {
    if (namesOK.test(firstnameInput.value)){
        firstnameError.style.display = 'none';
        sub = true;
    }else{
        firstnameError.textContent = 'Invalid first name. Use ukrainian letters.';
        firstnameError.style.display = 'block';
        sub = false;
    }
});

surnameInput.addEventListener('input', function() {
    if (namesOK.test(surnameInput.value)){
        surnameError.style.display = 'none';
        sub = true;
    }else{
        surnameError.textContent = 'Invalid last name. Use ukrainian letters.';
        surnameError.style.display = 'block';
        sub = false;
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const registrationTable = document.getElementById("registrationTable");
    const registrationForm = document.getElementById("registration-form");
    const duplicateButton = document.getElementById("duplicateRows");
    const deleteButton = document.getElementById("deleteRows");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (sub) {
            const formData = {
                "Email": document.getElementById("email").value,
                "Phone Number": document.getElementById("phone").value,
                "Surname": document.getElementById("surname").value,
                "First Name": document.getElementById("firstname").value,
                "Middle Name": document.getElementById("middlename").value,
                "Date of Birth": document.getElementById("dob").value,
                "Group": document.getElementById("group").value,
                "Gender": document.querySelector('input[name="gender"]:checked').value
            };

            for (let key in formData) {
                const newRow = registrationTable.insertRow(-1); // Вставляємо на останнє місце
                addCheckboxToRow(newRow);
                const cell1 = newRow.insertCell(0);
                const cell2 = newRow.insertCell(1);

                cell1.innerHTML = key;
                cell2.innerHTML = formData[key];
            }

            registrationForm.reset();

            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            firstnameError.style.display = 'none';
            surnameError.style.display = 'none';
            middlenameError.style.display = 'none';

            duplicateButton.style.display = "inline-block";
            deleteButton.style.display = "inline-block";
        }
    });

    function addCheckboxToRow(row) {
        const cell = row.insertCell(0);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        cell.appendChild(checkbox);
    }

    function getSelectedRows() {
        return Array.from(registrationTable.rows).slice(1) // Пропускаємо заголовок таблиці
            .filter(row => row.querySelector('input[type="checkbox"]').checked);
    }

    duplicateButton.addEventListener("click", function () {
        const selectedRows = getSelectedRows();

        selectedRows.forEach(row => {
            const newRow = registrationTable.insertRow(row.rowIndex + 1); // Вставляємо новий рядок після поточного
            for (let cellIndex = 0; cellIndex < row.cells.length; cellIndex++) {
                const cell = newRow.insertCell(cellIndex);
                cell.innerHTML = row.cells[cellIndex].innerHTML;
            }
        });
    });

    deleteButton.addEventListener("click", function () {
        const selectedRows = getSelectedRows();

        selectedRows.forEach(row => {
            registrationTable.deleteRow(row.rowIndex);
        });
    });

});

