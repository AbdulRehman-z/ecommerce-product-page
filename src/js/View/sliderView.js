class SliderView {
  parentEl = document.querySelector(".modal__list-container");
  slides = document.querySelectorAll(".modal__main-img");
  modal = document.querySelector(".modal");
  imgBtn = document.querySelector(".left-content__main-img");
  btnNext = document.querySelector(".modal__next");
  btnPrevious = document.querySelector(".modal__previous");
  bordersArr;

  count = 0;

  eventHandler(handler) {
    this.imgBtn.addEventListener("click", handler);
  }

  btnNextHandler(handler) {
    this.btnNext.addEventListener("click", handler);
  }

  btnPrevHandler(handler) {
    this.btnPrevious.addEventListener("click", handler);
  }

  createThumbnails() {
    this.slides.forEach((_, i) => {
      const markup = this._generateMarkup(i);
      this.parentEl.insertAdjacentHTML("beforeend", markup);
      const nodeList = document.querySelectorAll(".modal__list-item");
      this.bordersArr = nodeList;
      this.parentEl.firstElementChild.classList.add("img-border");
    });
  }

  _generateMarkup(i) {
    return `
         <li class="modal__list-item "
          data-list=${i + 1}>
          <img
            src="images/image-product-${i + 1}-thumbnail.jpg"
            class="modal__img-thumb"
            data-img=${i + 1}
          />
        </li>
        `;
  }

  goToSlide(slide) {
    this.slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  activateThumbNailOnSlide(slide) {
    this.bordersArr.forEach((el) => {
      el.classList.remove("img-border");
    });

    document
      .querySelector(`.modal__list-item[data-list="${slide}"]`)
      .classList.add("img-border");
  }

  thumbClick() {
    this.parentEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal__list-container") || !e.target)
        return;
      this.bordersArr.forEach((el) => {
        // console.log(el);
        el.classList.remove("img-border");
      });

      if (e.target.classList.contains("modal__img-thumb")) {
        const dataset = e.target.dataset.img;
        const parentElement = e.target.parentElement;
        parentElement.classList.add("img-border");
        this.goToSlide(+dataset - 1);
      }
    });
  }
}

export default new SliderView();
