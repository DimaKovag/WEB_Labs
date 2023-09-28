function openNav() {
    document.getElementById("mySidebar").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
    document.getElementById("navbar").style.marginLeft = "20%";
    document.getElementById("header").style.marginLeft = "20%";
    document.getElementById("footer").style.marginLeft = "20%";
    document.getElementById("buttonOpen").style.display = 'none';
    document.getElementById("buttonCloseWord").style.display = 'inline';
    document.getElementById("mySidebar").style.display = 'inline';
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("footer").style.marginLeft = "0";
    document.getElementById("buttonOpen").style.display = 'inline';
    document.getElementById("buttonCloseWord").style.display = 'none';
}
