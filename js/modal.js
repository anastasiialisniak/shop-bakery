const modal = document.querySelector('.backdrop');
const modalBtnOpens = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => {
  modal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
};

modalBtnOpens.forEach((btn) => btn.addEventListener('click', toggleModal));
if (modalBtnClose) {
  modalBtnClose.addEventListener('click', toggleModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      toggleModal();
    }
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && !modal.classList.contains('is-hidden')) {
    toggleModal();
  }
});
