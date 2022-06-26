// import images from "url:../../../images";

class switchImageView {
  clickedImg = document.querySelector(".left-content__img-thumb");
  parentEl = document.querySelector(".left-content__list-container");
  mainImage = document.querySelector(".left-content__main-img");
  bordersArr = document.querySelectorAll(".left-content__list-item");

  thumbImgHandler() {
    this.parentEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("left-content__img-thumb")) {
        const clickedEl = e.target;
        this.mainImage.src = `/images/image-product-${clickedEl.dataset.img}.jpg`;
        console.log(clickedEl.dataset.img);
      }
    });
  }

  thumbnailImgModify() {
    this.parentEl.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("left-content__list-container") ||
        !e.target
      )
        return;

      this.bordersArr.forEach((el) => {
        el.classList.remove("img-border");
      });
      if (e.target.classList.contains("left-content__img-thumb")) {
        const clickedEl = e.target.parentElement;
        clickedEl.classList.add("img-border");
      }
    });
  }
}
export default new switchImageView();
