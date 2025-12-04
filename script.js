document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os links que começam com #
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // -70px para compensar a navbar fixa
          behavior: "smooth",
        });
      }
    });
  }
});