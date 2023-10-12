function calculateRectangle() {
    var lengthInput = document.getElementById("length");
    var widthInput = document.getElementById("width");
    var perimeterSpan = document.getElementById("perimeter");
    var areaSpan = document.getElementById("area");
    var diagonalSpan = document.getElementById("diagonal");

    var length = parseFloat(lengthInput.value);
    var width = parseFloat(widthInput.value);

    if (isNaN(length) || isNaN(width)) {
        perimeterSpan.textContent = "---";
        areaSpan.textContent = "---";
        diagonalSpan.textContent = "---";
    } else {
        var perimeter = 2 * (length + width);
        var area = length * width;
        var diagonal = Math.sqrt(length**2 + width**2);

        perimeterSpan.textContent = perimeter.toFixed(2);
        areaSpan.textContent = area.toFixed(2);
        diagonalSpan.textContent = diagonal.toFixed(5);
    }
}
