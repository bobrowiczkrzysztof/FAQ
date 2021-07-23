const chevronBtn = document.querySelectorAll(".faq-toggle");
chevronBtn.forEach(button =>
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  })
);
