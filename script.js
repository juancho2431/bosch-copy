const form = document.getElementById('contact-form');
const feedback = document.querySelector('.form__feedback');

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get('name')?.trim();
  const email = data.get('email')?.trim();
  const service = data.get('service');

  if (!name || !email || !service) {
    feedback.textContent = 'Por favor completa los campos obligatorios.';
    feedback.style.color = '#d90429';
    return;
  }

  if (!validateEmail(email)) {
    feedback.textContent = 'El correo electrónico no es válido.';
    feedback.style.color = '#d90429';
    return;
  }

  feedback.textContent = '¡Gracias! Un asesor se comunicará contigo en breve.';
  feedback.style.color = '#00a0a6';
  form.reset();
});
