document.addEventListener("DOMContentLoaded", () => {
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }
  const navLinks = document.querySelectorAll(".navigation_bar a");

  navLinks.forEach((link) => {
    const linkTarget = link.getAttribute("href");

    if (linkTarget === currentPage) {
      link.classList.add("active");
      link.classList.remove("not");
    } else {
      link.classList.remove("active");
      link.classList.add("not");
    }
  });
});
