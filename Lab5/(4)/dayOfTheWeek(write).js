function date() {

    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const a = Math.floor((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 2;
    const dayOfWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;

    document.getElementById("daySpan").textContent = day;
    document.getElementById("monthSpan").textContent = month;
    document.getElementById("yearSpan").textContent = year;
    document.getElementById("dayOfTheWeekSpan").textContent = days[dayOfWeek];
}