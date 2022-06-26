class NavigationView {
  container = document.querySelector(".nav-left__item-row");
  navLink = document.querySelectorAll(".nav-left__item");
  border = document.querySelector(".border-bottom-item");

  onHoverAnimateHandler() {
    this.container.addEventListener("mouseover", (e) => {
      if (e.target.classList.contains("nav-left__item")) {
        const link = e.target;
        const width = Math.ceil(link.clientWidth);
        const formattedWidth = width + "px";
        const siblingNode = link.nextElementSibling;
        siblingNode.style.width = formattedWidth;
        siblingNode.classList.toggle("hidden");
      }
    });

    this.container.addEventListener("mouseout", (e) => {
      if (e.target.classList.contains("nav-left__item")) {
        const link = e.target;
        const siblingNode = link.nextElementSibling;
        siblingNode.classList.toggle("hidden");
      }
    });
  }
}

export default new NavigationView();
