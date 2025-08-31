const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function loadTheme(){
  const savedTheme = localStorage.getItem("theme") || "dark";
  const currentTheme = rootHtml.getAttribute("data-theme", savedTheme);

  // currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  // toggleTheme.classList.toggle("bi-sun")
  // toggleTheme.classList.toggle("bi-moon-stars")
  if (savedTheme === "light") {
    toggleTheme.classList.remove("bi-moon-stars");
    toggleTheme.classList.add("bi-sun");
  } else {
    toggleTheme.classList.remove("bi-sun");
    toggleTheme.classList.add("bi-moon-stars");
  }
}

// Trocar tema e salvar
function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  rootHtml.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); // Salva no navegador

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
loadTheme(); // Carrega o tema salvo

// accordionHeaders.forEach(header => {
//   header.addEventListener("click", () => {
//     const accordionItem = header.parentElement;
//     const accordionActive = accordionItem.classList.contains("active");

//     accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
//   })
// })
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle("active");
  });
});

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
});

(async () => {
  try {
    const profileData = await fetchProfileData();

    if (typeof updateProfileInfo === "function") updateProfileInfo(profileData);
    if (typeof updateSoftSkills === "function") updateSoftSkills(profileData);
    if (typeof updateHardSkills === "function") updateHardSkills(profileData);
    if (typeof updateLanguages === "function") updateLanguages(profileData);
    if (typeof updatePortfolio === "function") updatePortfolio(profileData);
    if (typeof updateProfessionalExperience === "function") updateProfessionalExperience(profileData);
    if (typeof updateProjects === "function") updateProjects(profileData);
  } catch (err) {
    console.error("Erro ao carregar os dados:", err);
  }
})();