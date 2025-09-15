// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      console.log("Hamburger menu clicked"); // Debug line
    });
  } else {
    console.error("Hamburger or navMenu element not found");
  }

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // WhatsApp form submission
  const whatsappForm = document.getElementById("whatsappForm");
  if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      var name = this.name.value.trim();
      var phone = this.phone.value.trim();
      var service = this.service.value;
      var details = this.details.value.trim();

      // Create message
      var message =
        `🛫 Virtual Assistance Request:%0A%0A` +
        `👤 Name: ${name}%0A` +
        `📞 Phone: ${phone}%0A` +
        `🔧 Service Needed: ${service}%0A` +
        `📋 Details: ${details}`;

      var whatsappUrl = `https://wa.me/2348028256981?text=${message}`;
      window.open(whatsappUrl, "_blank");
    });
  }
});
