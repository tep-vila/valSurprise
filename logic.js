const startModal = document.getElementById("start-modal");

function hideStartModal() {
  startModal.style.display = "none"; // hide modal
}

// Listen for both click (desktop) and touch (mobile)
startModal.addEventListener("click", hideStartModal);
startModal.addEventListener("touchstart", hideStartModal);
