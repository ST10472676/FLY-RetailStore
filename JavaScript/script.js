// ========================================
// WEDE POE PART 3 – JavaScrip
// Name: Rofulufhela Unanne Munaka
// Student Number: ST10472676
// ========================================


if (document.title.toLowerCase().includes("index")) {
  alert("Welcome to FLY Streetwear — Where Street Meets Style!");
}

const yearSpan = document.querySelector("#year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ---------- ACCORDION INTERACTIVITY ----------
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

const searchInput = document.querySelector("#search");
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".product").forEach(product => {
      product.style.display = product.textContent.toLowerCase().includes(query)
        ? "block"
        : "none";
    });
  });
}

// LIGHTBOX GALLERY
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", () => lightbox.remove());
  });
});


const enquiryForm = document.querySelector("#enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const service = document.querySelector("#service").value;
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !service || !message) {
      alert("Please complete all fields before submitting.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    
    document.querySelector("#response").textContent =
      `Thank you ${name}! Your enquiry about ${service} has been received. We will reply within 24 hours.`;
    enquiryForm.reset();
  });
}

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const cname = document.querySelector("#cname").value.trim();
    const cemail = document.querySelector("#cemail").value.trim();
    const cmsg = document.querySelector("#cmsg").value.trim();

    if (!cname || !cemail || !cmsg) {
      alert("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(cemail)) {
      alert("Invalid email format.");
      return;
    }

    alert(`Thank you ${cname}, your message has been sent successfully!`);
    contactForm.reset();
  });
}
