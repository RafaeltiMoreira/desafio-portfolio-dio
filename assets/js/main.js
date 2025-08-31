function updateProjects(profileData) {
  const projectsContainer = document.getElementById("projects-container")
  projectsContainer.innerHTML = profileData.portfolio.projects.map(project => `
    <div class="projects__card">
      <img class="card__cover" src="${project.image}" alt="Capa ${project.name}">
      <div class="card__body">
        <h3 class="card__title">${project.name}</h3>
        <p class="card__description">${project.description}</p>
        <ul class="card__list">
          ${project.features.map(feature => `<li class="card__item">${feature};</li>`).join("")}
        </ul>
        <ul class="technologies__list">
          ${project.technologies.map(tech => `
            <li class="technologies__item">
              <img class="technologies__logo" src="${tech.logo}" alt="Logo ${tech.name}" title="${tech.name}">
            </li>`).join("")}
        </ul>
        <div class="card__buttons">
          <a href="${project.links.preview}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
            <span>Prévia</span>
            <i class="bi bi-arrow-up-right"></i>
          </a>
          <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn">
            <span>Repositório</span>
          </a>
        </div>
      </div>
    </div>
  `).join("")
}