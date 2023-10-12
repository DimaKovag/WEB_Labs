const data = [
    { title: "Helping kids", description: "Educational donation", date: "03.09.2010" },
    { title: "Medicine", description: "Cancer", date: "11.09.2001" },
    { title: "Charity event", description: "Helping homeless people ", date: "05.04.1972" }
];

// Функція для створення рядка таблиці
function createTableRow(item) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td>${item.date}</td>
        <td>
            <button class="btn btn-primary btn-sm">Check</button>
            <button class="btn btn-warning btn-sm">Change</button>
            <button class="btn btn-danger btn-sm">Delete</button>
        </td>
    `;
    return row;
}

// Додавання рядків до таблиці
const tableBody = document.querySelector("tbody");
data.forEach(item => {
    const row = createTableRow(item);
    tableBody.appendChild(row);
});