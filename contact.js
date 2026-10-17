const contactDialog = document.getElementById('contactModal');

if (contactDialog) {
  document.querySelectorAll('[data-open-contact]').forEach((button) => {
    button.addEventListener('click', () => contactDialog.showModal());
  });

  document.querySelectorAll('[data-close-contact]').forEach((button) => {
    button.addEventListener('click', () => contactDialog.close());
  });

  contactDialog.addEventListener('click', (event) => {
    const bounds = contactDialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    ) {
      contactDialog.close();
    }
  });
}
