document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const navigationMenu = document.querySelector(".nav-menu");
  const dropdownItems = document.querySelectorAll(".has-dropdown");

  if (mobileMenuButton && navigationMenu) {
    mobileMenuButton.addEventListener("click", () => {
      const isOpen = navigationMenu.classList.toggle("is-open");

      mobileMenuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });
  }

  dropdownItems.forEach((item) => {
    const toggle = item.querySelector(".dropdown-toggle");

    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = item.classList.contains("is-open");

      dropdownItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("is-open");

          const otherToggle =
            otherItem.querySelector(".dropdown-toggle");

          if (otherToggle) {
            otherToggle.setAttribute(
              "aria-expanded",
              "false"
            );
          }
        }
      });

      item.classList.toggle("is-open", !isOpen);
      toggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );
    });
  });

  document.addEventListener("click", (event) => {
    dropdownItems.forEach((item) => {
      if (!item.contains(event.target)) {
        item.classList.remove("is-open");

        const toggle =
          item.querySelector(".dropdown-toggle");

        if (toggle) {
          toggle.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    dropdownItems.forEach((item) => {
      item.classList.remove("is-open");

      const toggle =
        item.querySelector(".dropdown-toggle");

      if (toggle) {
        toggle.setAttribute(
          "aria-expanded",
          "false"
        );
      }
    });
  });
});
