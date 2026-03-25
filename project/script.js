// existing — unchanged
function scrollToSection() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// open modal
function openBlog() {
    document.getElementById("blogModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

// close modal
function closeBlog() {
    document.getElementById("blogModal").classList.remove("active");
    document.body.style.overflow = "auto";
    document.getElementById("blogName").value = "";
    document.getElementById("blogText").value = "";
    document.getElementById("charCount").textContent = "0 / 300";
}

// character counter
document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("blogText");
    if (textarea) {
        textarea.addEventListener("input", function () {
            document.getElementById("charCount").textContent =
                textarea.value.length + " / 300";
        });
    }
});

// submit message
function submitBlog() {
    const name    = document.getElementById("blogName").value.trim();
    const message = document.getElementById("blogText").value.trim();

    if (!name) {
        alert("Please enter your name!");
        return;
    }
    if (!message) {
        alert("Please write a message!");
        return;
    }

    const noMsg = document.querySelector(".no-messages");
    if (noMsg) noMsg.remove();

    const now  = new Date();
    const time = now.toLocaleString();

    const card = document.createElement("div");
    card.classList.add("blog-card");
    card.innerHTML = `
        <div class="blog-author">🌿 ${name}</div>
        <div class="blog-message">${message}</div>
        <div class="blog-time">🕐 ${time}</div>
    `;

    document.getElementById("blogMessages").appendChild(card);
    document.getElementById("blogSection").scrollIntoView({ behavior: "smooth" });
    closeBlog();
}

// close modal on background click
window.addEventListener("click", function (e) {
    const modal = document.getElementById("blogModal");
    if (e.target === modal) closeBlog();
});
