class OpenModalView {
  img = document.querySelector(".left-content__main-img");
  modal = document.querySelector(".modal");
  overlay = document.querySelector(".overlay");
  btnClose = document.querySelector(".modal__cross");

  openModal() {
    this.img.addEventListener("click", (e) => {
      this.modal.classList.toggle("hidden");
      this.overlay.classList.toggle("hidden");
    });

    if (!this.img) return;
  }

  closeModal() {
    [this.overlay, this.btnClose].forEach((el) => {
      el.addEventListener("click", (e) => {
        this.modal.classList.toggle("hidden");
        this.overlay.classList.toggle("hidden");
      });
      if (!this.img) return;
    });
  }
}

export default new OpenModalView();
