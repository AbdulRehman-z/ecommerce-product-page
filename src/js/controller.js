import openModalView from "./View/openModalView";
import sliderView from "./View/sliderView";
import * as modal from "./modal";
import addToCartView from "./View/addToCartView";
import navigationView from "./View/navigationView";
import switchImageView from "./View/switchImageView";

const openModalController = function () {
  openModalView.openModal();
  openModalView.closeModal();
};

const sliderController = function () {
  sliderView.goToSlide(0);
  if (modal.state.createThumbnailState) sliderView.createThumbnails();
  modal.state.createThumbnailState = false;
};

const addItemController = function () {
  addToCartView.addItemToCart();
  addToCartView.updateCounter();
};

const renderCartController = function () {
  addToCartView.renderCart();
};

const deleteItemController = function () {
  addToCartView.deleteItemFromCart();
  addToCartView.updateCounter();
};

const init = function () {
  openModalController();
  switchImageView.thumbnailImgModify();
  switchImageView.thumbImgHandler();
  addToCartView.bodyHandler();
  addToCartView.cartIconHandler();
  addToCartView.renderCartHandler(renderCartController);
  addToCartView.init();
  addToCartView.cartIconHandler(renderCartController);
  // addToCartView.emptyCart();
  addToCartView.itemAddHandler(addItemController);
  addToCartView.itemDeleteHandler(deleteItemController);
  sliderView.eventHandler(sliderController);
  sliderView.btnNextHandler(modal.nextSlide);
  sliderView.btnPrevHandler(modal.prevSlide);
  sliderView.thumbClick();
  navigationView.onHoverAnimateHandler();
};
init();
