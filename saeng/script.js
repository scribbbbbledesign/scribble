function hide() {
    var x = document.getElementById("sang");
    x.style.display = "none";
  }

function show() {
    var x = document.getElementById("sang");
    if (x.style.display === "none") {
    x.style.display = "block";
    }
    else {
    x.style.display = "none";
    }
}