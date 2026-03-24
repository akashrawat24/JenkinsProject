document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    document.getElementById("output").innerText = "Hello " + name;
});
