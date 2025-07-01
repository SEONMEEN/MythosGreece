document.addEventListener('DOMContentLoaded', () => {
  // quiz logic
  const steps = document.querySelectorAll(".quiz-step");
  const nextButtons = document.querySelectorAll(".next-btn");
  const resultDiv = document.getElementById("result");
  const form = document.getElementById("god-quiz");
  
  let currentStep = 0;

  nextButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const currentInputs = steps[index].querySelectorAll('input[type="radio"]');
      const selected = Array.from(currentInputs).some((input) => input.checked);
      if (!selected) {
        alert("Please select an answer before proceeding.");
        return;
      }
      steps[index].classList.add("hidden");
      steps[index + 1].classList.remove("hidden");
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const scores = {};
    for (let [key, value] of formData.entries()) {
      scores[value] = (scores[value] || 0) + 1;
    }
    const god = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const names = {
      zeus: " Zeus",
      poseidon: " Poseidon",
      athena: " Athena",
      ares: " Ares",
    };
    form.classList.add("hidden");
    resultDiv.innerHTML = `You are most like <span class="text-indigo-600">${names[god]}</span>!`;
    resultDiv.classList.remove("hidden");
    document.getElementById("try-again").classList.remove("hidden");
  });

  document.getElementById("try-again").addEventListener("click", () => {
    form.reset();
    resultDiv.classList.add("hidden");
    document.getElementById("try-again").classList.add("hidden");
    steps.forEach((step) => step.classList.add("hidden"));
    steps[0].classList.remove("hidden");
    form.classList.remove("hidden");
  });

  // Slider code
  let current = 0;
  const total = 3;
  const slider = document.getElementById("slider");

  document.getElementById("nextBtn").onclick = () => {
    if (current < total - 1) current++;
    updateSlider();
  };

  document.getElementById("prevBtn").onclick = () => {
    if (current > 0) current--;
    updateSlider();
  };

  function updateSlider() {
    slider.style.transform = `translateX(-${current * 100}vw)`;
  }

  // Mobile menu toggle
  const btn = document.getElementById("menu-btn");
  const btnClose = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    console.log("Menu button clicked");
    mobileMenu.classList.toggle("hidden");
  });

  btnClose.addEventListener("click", () => {
    console.log("Close button clicked");
    mobileMenu.classList.add("hidden");
  });
});
