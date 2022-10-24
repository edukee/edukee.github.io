function videoFunction(i) {
    var x = document.getElementById("vid"+String(i));
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}