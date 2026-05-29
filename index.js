function updateNavigationStyles(currentActivePath) {
  const navButtons = document.querySelectorAll("#navbar .button");

  navButtons.forEach((button) => {
    const buttonPath = button.getAttribute("data-path");
    const isActive = buttonPath === currentActivePath;

    // If isActive is true, adds "active" and removes "not".
    // If false, removes "active" and adds "not".
    button.classList.toggle("active", isActive);
    button.classList.toggle("not", !isActive);
  });
}
