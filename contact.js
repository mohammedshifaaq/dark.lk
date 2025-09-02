
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent default reload

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formMessage.textContent = 'Form sent successfully!. We will contact you soon';
      form.reset();
    } else {
      formMessage.textContent = 'Oops! Something went wrong.';
      formMessage.style.color = 'red';
    }

  } catch (error) {
    formMessage.textContent = 'Oops! Something went wrong.';
    formMessage.style.color = 'red';
  }
});
