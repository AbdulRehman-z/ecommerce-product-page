import sliderView from "./View/sliderView";
export const state = {
  maxLenght: sliderView.slides.length,
  currSlide: 0,
  cartItem: 0,
  cartIconState: true,
  createThumbnailState: true,
};

export const nextSlide = function () {
  if (state.currSlide === state.maxLenght - 1) {
    state.currSlide = 0;
  } else {
    state.currSlide++;
  }
  sliderView.goToSlide(state.currSlide);
  sliderView.thumbClick(state.currSlide);
  sliderView.activateThumbNailOnSlide(state.currSlide + 1);
};

export const prevSlide = function () {
  if (state.currSlide === 0) {
    state.currSlide = state.maxLenght - 1;
  } else {
    state.currSlide--;
  }
  sliderView.goToSlide(state.currSlide);
  sliderView.thumbClick(state.currSlide);
  sliderView.activateThumbNailOnSlide(state.currSlide + 1);
};
