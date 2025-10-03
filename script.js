const form = document.getElementById('contact-form');
const feedback = document.querySelector('.form__feedback');
const submitButton = form?.querySelector('button[type="submit"]');
const endpoint = form?.dataset.endpoint;

document.body?.classList.add('has-js');

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

const setFeedback = (message = '', type = 'success') => {
  if (!feedback) return;
  feedback.textContent = message;
  feedback.className = 'form__feedback';
  if (message) {
    feedback.classList.add(`form__feedback--${type}`);
  }
};

const setLoading = (isLoading) => {
  if (!submitButton) return;
  submitButton.disabled = isLoading;
  submitButton.classList.toggle('btn--loading', isLoading);
};

const trimValue = (value) => (value ?? '').toString().trim();

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = trimValue(data.get('name'));
  const email = trimValue(data.get('email'));
  const service = trimValue(data.get('service'));
  const message = trimValue(data.get('message'));

  setFeedback();

  if (!name || !email || !service) {
    setFeedback('Por favor completa los campos obligatorios.', 'error');
    return;
  }

  if (!validateEmail(email)) {
    setFeedback('El correo electrónico no es válido.', 'error');
    return;
  }

  data.set('name', name);
  data.set('email', email);
  data.set('service', service);
  data.set('message', message);

  if (!endpoint) {
    setFeedback('No se ha configurado el destino del formulario. Por favor intenta más tarde.', 'error');
    return;
  }

  try {
    setLoading(true);
    setFeedback('Enviando tu solicitud...', 'info');

    const response = await fetch(endpoint, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error al enviar formulario: ${response.status}`);
    }

    await response.json().catch(() => ({}));

    setFeedback('¡Gracias! Un asesor se comunicará contigo en breve.', 'success');
    form.reset();
  } catch (error) {
    console.error(error);
    setFeedback(
      'Hubo un inconveniente al enviar tu solicitud. Inténtalo nuevamente o contáctanos por WhatsApp.',
      'error'
    );
  } finally {
    setLoading(false);
  }
});

const animatedSections = document.querySelectorAll('[data-animate]');

if (animatedSections.length) {
  const reveal = (element) => element.classList.add('is-visible');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );

    animatedSections.forEach((section) => observer.observe(section));
  } else {
    animatedSections.forEach(reveal);
  }
}
