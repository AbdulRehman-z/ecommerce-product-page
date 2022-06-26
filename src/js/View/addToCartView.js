import * as modal from "./../modal";

class AddToCart {
  body = document.getElementsByTagName("body");
  btnAdd = document.querySelector(".right-content__increase");
  btnDelete = document.querySelector(".right-content__decrease");
  addToCartBtn = document.querySelector(".right-content__btn-primary");
  parentEl = document.querySelector(".count-container");
  cartIcon = document.querySelector(".nav-right__cart");
  cartIconCounter = document.querySelector(".nav-right__figure");
  counterContainer = document.querySelector(".count-box");
  cartContainer = document.querySelector(".cart-container");
  deleteWholeCart;
  itemCountEl;
  cartModel;
  itemCount = modal.state.cartItem;

  itemAddHandler(handler) {
    this.btnAdd.addEventListener("click", handler);
  }

  itemDeleteHandler(handler) {
    this.btnDelete.addEventListener("click", handler);
  }

  bodyHandler() {
    document.body.addEventListener("click", (e) => {
      // console.log(this.body);
      if (e.target.classList.contains("right-content__btn-primary"))
        return this.cartModel.classList.remove("hidden--1");
      if (e.target.classList.contains("nav-right__cart"))
        return this.cartModel.classList.remove("hidden--1");
      //

      if (this.cartModel) return this.cartModel.classList.add("hidden--1");
    });
  }

  cartIconHandler(handler) {
    this.cartIcon.addEventListener("click", handler);
  }

  renderCart() {
    if (this.cartModel) {
      const firstChild = this.cartContainer.firstElementChild;
      // console.log("king", firstChild);
      firstChild.remove();
    }
    // console.log("test");
    const itemCount = this.itemCount;
    const html = `<div class="card animate hidden--1">
      <h1 class="card__heading">Cart</h1>
      <div class="card__border"></div>

      <div class="card__content">
        <img
          src="images/image-product-1-thumbnail.jpg"
          class="card__img-thumbnail-1"
          alt=""
        />
        <div class="card__text-content">
          <span class="card__content-heading"
            >Fall Limited Edition Sneakers</span
          >
          <h4 class="card__calc">
            $${125}.00 x ${itemCount}=<span class="card__result">$${
      125.0 * itemCount
    }.00</span>
          </h4>
        </div>
        <img
          src="images/icon-delete.svg"
          alt=""
          class="card__img-thumbnail-2"
        />
      </div>
      <button class="card__btn-primary">Checkout</button>
    </div>`;

    this.cartContainer.insertAdjacentHTML("beforeend", html);
    const getCartModel = document.querySelector(".card");
    this.cartModel = getCartModel;
    // console.log(this.cartModel);
    const deleteIcon = document.querySelector(".card__img-thumbnail-2");
    this.deleteWholeCart = deleteIcon;
    this.emptyCart();
    this.cartModel.classList.toggle("hidden--1");
    console.log(modal.state.cartItem);
  }

  // onClickCartRender() {
  //   this.renderCart();
  //   console.log(this.cartModel);
  //   this.cartModel.classList.toogle("hidden--1");

  //   //  modal.state.cartIconState ? this.scenerio1() : this.scenerio2();
  //   // if (modal.state.cartIconState === true) {
  //   //   console.log(this.renderCart);
  //   //   this.renderCart();
  //   //   modal.state.cartIconState = false;
  //   //   console.log("test1");
  //   // } else {
  //   //   this.cartModel.classList.add("hidden--1");
  //   //   console.log("test2");
  //   //   modal.state.cartIconState = true;
  //   // }

  // }
  renderCartHandler(handler) {
    this.addToCartBtn.addEventListener("click", handler);
    // });
  }

  addItemToCart() {
    if (this.itemCount >= 0) this.itemCount++;
    this._generateMarkup();
  }

  deleteItemFromCart() {
    if (this.itemCount === 0) return;
    this.itemCount--;
    this._generateMarkup();
  }

  updateCounter() {
    const html = `<span class="nav-right__item-count">${this.itemCount}</span>`;
    const firstChild = this.counterContainer.firstElementChild;

    firstChild.remove();
    this.counterContainer.insertAdjacentHTML("beforeend", html);
  }

  init() {
    //Add to cart counter
    const html1 = `<span class="right-content__count">${this.itemCount}</span>`;
    this.parentEl.insertAdjacentHTML("beforeend", html1);

    //Add to item counter
    const html2 = `<span class="nav-right__item-count">${this.itemCount}</span>`;
    this.counterContainer.insertAdjacentHTML("beforeend", html2);
  }

  _generateMarkup() {
    const html = `<span class="right-content__count">${this.itemCount}</span>`;
    const firstChild = this.parentEl.firstElementChild;
    firstChild.remove();
    this.parentEl.insertAdjacentHTML("beforeend", html);
  }

  emptyCart() {
    this.deleteWholeCart.addEventListener("click", (e) => {
      this.itemCount = 0;

      // const html = `<span class="nav-right__item-count">${this.itemCount}</span>`;
      // const firstChild = this.counterContainer.firstElementChild;
      // firstChild.remove();
      // this.counterContainer.insertAdjacentHTML("beforeend", html);
      this.updateCounter();

      this._generateMarkup();
    });
  }
}

export default new AddToCart();
