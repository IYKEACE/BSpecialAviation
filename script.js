// Flight type toggle
      const flightTypeBtns = document.querySelectorAll(".flight-type-btn");
      const flightTypeContainer = document.querySelector(".flight-type");
      const returnDateDiv = document.querySelector(".return-date");

      flightTypeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          flightTypeBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          flightTypeContainer.setAttribute("data-active", btn.dataset.type);
          // Only show return date for 'Return', hide for 'One Way'
          if (btn.dataset.type === "one-way") {
            returnDateDiv.style.display = "none";
          } else {
            returnDateDiv.style.display = "";
          }
        });
      });

      // Passenger counter functionality
      const counters = document.querySelectorAll(".counter");

      counters.forEach((counter) => {
        const minusBtn = counter.querySelector(".minus");
        const plusBtn = counter.querySelector(".plus");
        const countElement = counter.querySelector(".count");

        let count = parseInt(countElement.textContent);

        minusBtn.addEventListener("click", () => {
          if (count > 0) {
            count--;
            countElement.textContent = count;
          }
        });

        plusBtn.addEventListener("click", () => {
          count++;
          countElement.textContent = count;
        });
      });

      // Set default date to today
      const today = new Date().toISOString().split("T")[0];
      document.getElementById("departure-date").value = today;
      document.getElementById("departure-date").min = today;
      document.getElementById("return-date").min = today;

      // Enhanced WhatsApp form submission
      document
        .getElementById("whatsappForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Get flight details
          const flightType = document.querySelector(
            ".flight-type-btn.active"
          ).textContent;
          const departureDate = document.getElementById("departure-date").value;
          const returnDate =
            document.getElementById("return-date").value || "N/A";
          const adults = document.querySelectorAll(".count")[0].textContent;
          const children = document.querySelectorAll(".count")[1].textContent;
          const infants = document.querySelectorAll(".count")[2].textContent;

          // Original form data
          var name = this.name.value.trim();
          var email = this.email.value.trim();
          var phone = this.phone.value.trim();
          var service = this.service.value;
          var details = this.details.value.trim();

          // Enhanced message
          var message =
            `✈️ Flight Booking Request:%0A%0A` +
            `🔹 Flight Type: ${flightType}%0A` +
            `📅 Departure: ${departureDate}%0A` +
            `📅 Return: ${returnDate}%0A` +
            `👥 Passengers: ${adults} Adult(s), ${children} Child(ren), ${infants} Infant(s)%0A%0A` +
            `🧑‍💼 Contact Details:%0A` +
            `Name: ${name}%0A` +
            `Email: ${email}%0A` +
            `Phone: ${phone}%0A` +
            `Service: ${service}%0A` +
            `Additional Details: ${details}`;

          var whatsappUrl = `https://wa.me/2348028256981?text=${message}`;
          window.open(whatsappUrl, "_blank");
        });