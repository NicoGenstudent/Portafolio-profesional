(function () {
  "use strict";

  // Select all forms with the 'php-email-form' class
  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (thisForm) {
    thisForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      // Get feedback elements
      const loading = thisForm.querySelector('.loading');
      const errorMessage = thisForm.querySelector('.error-message');
      const sentMessage = thisForm.querySelector('.sent-message');

      // Reset feedback elements
      loading.classList.add('d-block');
      errorMessage.classList.remove('d-block');
      sentMessage.classList.remove('d-block');

      try {
        // Validate form fields
        const formData = new FormData(thisForm);
        validateForm(formData);

        // Send data to the Node.js backend
        const response = await fetch('https://portafolio-profesional-u5zf.onrender.com/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.message === 'OK') {
            sentMessage.classList.add('d-block'); // Show success message
            thisForm.reset(); // Clear the form
          } else {
            throw new Error(data.error || 'Form submission failed.');
          }
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        errorMessage.textContent = error.message; // Display error message
        errorMessage.classList.add('d-block');
      } finally {
        loading.classList.remove('d-block'); // Hide loading spinner
      }
    });
  });

  // Form validation function
  function validateForm(formData) {
    const requiredFields = ['name', 'email', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        throw new Error(`The ${field} field is required.`);
      }
    }
    if (!/\S+@\S+\.\S+/.test(formData.get('email'))) {
      throw new Error('Please enter a valid email address.');
    }
  }
})();