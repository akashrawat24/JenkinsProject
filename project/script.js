// existing function - unchanged
function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

// ── BLOG FUNCTIONS ──

function openBlog() {
    document.getElementById("blogModal").classList.add("active");
}

function closeBlog() {
    document.getElementById("blogModal").classList.remove("active");
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

// submit blog message
function submitBlog() {
    const name = document.getElementById("blogName").value.trim();
    const message = document.getElementById("blogText").value.trim();

    if (!name) {
        alert("Please enter your name!");
        return;
    }
    if (!message) {
        alert("Please write a message!");
        return;
    }

    // remove "no messages" placeholder
    const noMsg = document.querySelector(".no-messages");
    if (noMsg) noMsg.remove();

    // get current time
    const now = new Date();
    const time = now.toLocaleString();

    // create blog card
    const card = document.createElement("div");
    card.classList.add("blog-card");
    card.innerHTML = `
        <div class="blog-author">🌿 ${name}</div>
        <div class="blog-message">${message}</div>
        <div class="blog-time">🕐 ${time}</div>
    `;

    document.getElementById("blogMessages").appendChild(card);

    // scroll to blog section
    document.getElementById("blogSection").scrollIntoView({ behavior: "smooth" });

    // close modal
    closeBlog();
}

// close modal if user clicks outside
window.addEventListener("click", function (e) {
    const modal = document.getElementById("blogModal");
    if (e.target === modal) {
        closeBlog();
    }
});
