// --- Burger Close/Open Script---

function openBurger() {
  document.querySelector('.wrap').classList.add('wrap-mobile');
}

function closeBurger() {
  document.getElementById('burger').classList.toggle('wrap-mobile');
}

// --- Modal Script---

// --- Disabled scroll for modal ---
const body = document.body;
function disabledScrol() {
  body.classList.toggle('scroll_off');
}
// --- Toggle modal ---
function toggleModal() {
  document.getElementById('modal').classList.toggle('is-hidden');
  disabledScrol();
}

// === --- ===
