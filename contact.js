const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent page reload

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formMessage.textContent = 'Form sent successfully! We will contact you soon.';
      formMessage.classList.remove('error');
      formMessage.style.display = 'block';
      form.reset();

      // Hide message after 2 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 2000);

    } else {
      formMessage.textContent = 'Oops! Something went wrong.';
      formMessage.classList.add('error');
      formMessage.style.display = 'block';
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 2000);
    }

  } catch (error) {
    formMessage.textContent = 'Oops! Something went wrong.';
    formMessage.classList.add('error');
    formMessage.style.display = 'block';
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 2000);
  }
});
